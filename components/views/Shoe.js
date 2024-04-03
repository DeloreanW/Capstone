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
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value="customer">Customer</option>
            </select>
            <input type="search" name="filter" id="filter" />
            <button id="search-button">Search</button>
          </div>
          <table id="shoes">
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>Customer</th>
            </tr>
            <tr>
              <th>United States</th>
              <th>Europe</th>
            </tr>
          </table>

          <ul>
            ${state.shoes.map(shoe => {
              return html`
                <li>
                  <strong>${shoe.brand} <span>${shoe.name}</span></strong>
                  <span
                    ><img
                      src="${shoe.media.imageUrl}"
                      alt="shoe"
                      width="250"
                      height="150"
                  /></span>
                  <p>Price: ${shoe.retailPrice}</p>
                </li>
              `;
            })}
          </ul>
        </section>
      </tr>
    </table>
  </section>
`;
