import mongoose from "mongoose";

const shoeSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  shoeBrand: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  shoeSize: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  email: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  region: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Shoe = mongoose.model("Shoe", shoeSchema);

export default Shoe;
