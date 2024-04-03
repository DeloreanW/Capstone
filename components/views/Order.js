import html from "html-literal";

export default state => html`
  <section id="order">
    <form id="order" method="POST" action="">
      <select name="shoes" id="">
        ${state.shoes.map(shoe => {
          return `<option value="${shoe.name}">${shoe.name}</option>`;
        })}</select
      >
    </form>
  </section>
  ${state.shoes.map(shoe => console.log(shoe))}
`;

//gallery or contact us
