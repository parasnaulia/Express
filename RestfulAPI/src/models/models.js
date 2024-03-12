const mongoose = require("mongoose");
const validator = require("validator");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Inavalid Email");
      }
    },
  },
  phone: {
    type: Number,
  },
  age: {
    type: Number,
  },
});

const Para = new mongoose.model("Para", schema);
module.exports = Para;
