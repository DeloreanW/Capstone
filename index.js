import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
      ${Header(state)}
      ${Nav(store.Links)}
      ${Main(state)}
      ${Footer()}
    `;
  router.updatePageLinks();
  afterRender(state);
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  // Put form sub form here line 26-77 state.view=order
  if (state.view === "Order") {
    // Add an event handler for the submit button on the form
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      // Get the form element
      const inputList = event.target.elements;
      // console.log("Input Element List", inputList);

      // Create a request body object to send to the API
      const requestData = {
        shoe: inputList.shoe.value,
        size: inputList.size.value,
        firstName: inputList.firstname.value,
        lastName: inputList.lastname.value,
        email: inputList.email.value
      };
      // // Log the request body to the console
      console.log("request Body", requestData);

      axios
        // Make a POST request to the API to create a new pizza
        .post(`${process.env.SNEAK_PEAK_API_URL}/shoes`, requestData)
        .then(response => {
          //  Then push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          store.Shoe.shoes.push(response.data);
          router.navigate("/Shoe");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    // We need to know what view we are on to know what data to fetch
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=Chicago`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;
      case "Shoe":
      case "Order": //uncomment out
        // TEST IN THUNDERCLIENT FIRST -
        // Uncomment out this API 97-115
        axios
          .get("https://v1-sneakers.p.rapidapi.com/v1/sneakers", {
            params: {
              limit: "50"
            },
            headers: {
              "X-RapidAPI-Key": `${process.env.RAPIDAPI_API_KEY}`,
              "X-RapidAPI-Host": "v1-sneakers.p.rapidapi.com"
            }
          })
          .then(response => {
            console.log(response.data);
            store.Shoe.shoes = response.data.results;
            store.Order.shoes = response.data.results;
            done();
          })
          .catch(err => {
            console.log("No worky: ", err);
          });
        // axios
        //   .get(
        //     `https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=10`
        //   )
        //   .then(response => {
        //     // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
        //     console.log("response data", response.data);
        //     store.Shoe.shoes = response.data.response.shoes;
        //     done();
        //   })
        //   .catch(error => {
        //     console.log("It puked", error);
        //     done();
        //   });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
