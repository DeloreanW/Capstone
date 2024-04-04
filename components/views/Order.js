import html from "html-literal";

export default state => html`
  <section id="order">
    <form id="order" method="POST" action="">
      <select name="shoes" id="">
        ${state.shoes.map(shoe => {
          return `<option value="${shoe.name}">${shoe.name}</option>`;
        })}</select
      >
      <label for="Size">Size:</label>
        <select id="Size" name="Size">
          <option value="">Select a Size</option>
          <option value="7">7</option>
          <option value="7.5">7.5</option>
          <option value="8">8</option>
          <option value="8.5">8.5</option>
          <option value="9">9</option>
          <option value="9.5">9.5</option>
          <option value="10">10</option>
          <option value="10.5">10.5</option>
          <option value="11">11</option>
          <option value="11.5">11.5</option>
          <option value="12">12</option>
          <option value="12.5">12.5</option>
          <option value="13">13</option>
          <option value="13.5">13.5</option>
          <option value="14">14</option>
          <option value="14.5">14.5</option>
          <option value="15">15</option>
        </select>
      </div>
      <div>
        <label for="First Name">First Name:</label>
        <input
          type="text"
          name="First Name"
          id="First Name"
          placeholder="First Name"
          required
        />
      </div>
      <div>
        <label for="Last Name">Last Name:</label>
        <input
          type="text"
          name="Last Name"
          id="Last Name"
          placeholder="Last Name"
          required
        />
      </div>
      <div>
        <label for="Email">Email</label>
        <input type="text" name="Email" id="Email" placeholder="Email" />
      </div>
      <input type="submit" name="submit" value="Subscribe" />
    </form>
  </section>
  ${state.shoes.map(shoe => console.log(shoe))}
`;

//gallery or contact us
