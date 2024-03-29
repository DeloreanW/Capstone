import html from "html-literal";

export default state => html`
  <section id="Brand">
    <table id="Region">
    <div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="United States">Link 1</a>
    <a href="Europe">Link 2</a>
  </div>
</div>
      <tr>
      <section id="shoes">
    <div class="filter">
      <select name="column" id="column">
        <option value="">select a column</option>
        <option value="crust">Crust</option>
        <option value="">Cheese</option>
        <option value="">Sauce</option>
        <option value="">toppings</option>
        <option value="customer">Customer</option>
      </select>
      <input type="search" name="filter" id="filter" />
      <button id="search-button">Search</button>
    </div>
    <table id="shoes">
      <tr>
        <th>Crust</th>
        <th></th>
        <th></th>
        <th></th>
        <th>Customer</th>
      </tr>
        <th>United States</th>
        <th>Europe</th>
      </tr>
      ${state.Shoe.map(shoe => {
        return `${shoe}`;
      }).join("")}
    </table>
  </section>
`;
