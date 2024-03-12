///Now creating a collection
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sc = "4efc98266f022754cbdb4e5c6d713fc0710ceaa4d45ecd7398248a62e42eb627";
const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  Gender: {
    type: String,
    require: true,
  },
  Password: {
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
schema.pre("save", async function (next) {
  // console.log(this.Password);
  console.log(this.Password);
  const pass = await bcryptjs.hash(this.Password, 10);
  // console.log(pass);
  this.Password = pass;
  console.log("the hashed pass is" + this.Password);
  next();
});
schema.post("save", () => {
  console.log("Data Save bhi hogya h bc ");
});
schema.methods.ger = async function () {
  try {
    //console.log(this._id);
    const token = jwt.sign({ _id: this._id }, sc);
    this.tokens = this.tokens.concat({ token });
    await this.save();

    return token;
  } catch (err) {
    res.send("there is an error" + err);
    console.log("The error is" + err);
  }
};
schema.method.del = async function () {
  try {
 
    this.tokens = [];
    await this.save();
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
};
// Now We have created a schema Now for making collection is use mongoose.model
const Para = new mongoose.model("Para", schema);
module.exports = Para;
