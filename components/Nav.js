// import html from "html-literal";

// export default () => html`
//   <nav>
//     <i class="fas fa-bars"></i>
//     <ul class="hidden--mobile nav-links">
//       <li><a href="Home.html">Home</a></li>
//       <li><a href="Bio.html">Bio</a></li>
//       <li><a href="Region.html">Region</a></li>
//       <li><a href="Order.html">Order</a></li>
//     </ul>
//   </nav>
// `;

import html from "html-literal";

export default links => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links
        .map(
          link =>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>
  </nav>
`;
