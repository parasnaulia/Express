const mongoose = require("mongoose");
const validator = require("validator");
//Now we have to create a schema

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Inavlaid Email");
      }
    },
  },
  message: {
    type: String,
  },
});
// Now We have to Create a collection

const Port = new mongoose.model("Port", schema);

module.exports = Port;
