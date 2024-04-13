import html from "html-literal";

export default state => html`
      <tr>
        <section id="shoes">
          <div class="filter">
            <select name="region" id="region">
              <option value="">select a region</option>
              <option value="United States">United States</option>
              <option value="Europe">Europe</option>
            </select>
          </div>
          <table id="shoes">
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
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
