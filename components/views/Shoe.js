import html from "html-literal";

export default state => html`
  <section id="Brand">
    <table id="Region">
      <tr>
        <th>United States</th>
        <th>Europe</th>
      </tr>
      ${state.Shoe.map(shoe => {
        return `${shoe}`;
      }).join("")}
    </table>
  </section>
`;
