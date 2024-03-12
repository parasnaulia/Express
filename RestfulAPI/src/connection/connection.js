const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Bhai")
  .then(() => {
    console.log("connection has been created Sucessfully");
  })
  .then(() => {
    console.log("Connection Confirmed");
  })
  .catch((e) => {
    console.log(e);
  });
