const mongoose = require("mongoose");
const connection = async () => {
  const flag = await mongoose.connect("mongodb://localhost:27017/login-R");
  console.log("Connection is done");
};
connection();
