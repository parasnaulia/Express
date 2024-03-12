const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/papapap")
  .then(() => {
    console.log("connection stablished");
  })
  .catch((err) => {
    console.log(err);
  });
