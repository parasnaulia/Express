const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
//Now Creating schema
const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    require: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  password: {
    type: String,
    require: true,
  },
  cPassword: {
    type: String,
    require: true,
  },
  tokens: [
    {
      token: {
        type: String,
        require: true,
      },
    },
  ],
});

schema.pre("save", function () {
  //   console.log(this);
});
//Now ceating a collection
const Auth = new mongoose.model("Auth", schema);

module.exports = Auth;
