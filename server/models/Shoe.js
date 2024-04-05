import mongoose from "mongoose";

const shoeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  lastName: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  shoe: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  size: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  email: {
    type: String,
    required: true
  }
});

const Shoe = mongoose.model("Shoe", shoeSchema);

export default Shoe;
