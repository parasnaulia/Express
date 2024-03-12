const mongoose = require("mongoose");
const connection = async () => {
  try {
    const pp = await mongoose.connect("mongodb://localhost:27017/Portfolio");
    console.log("Connection has been stablished to the database");
  } catch (err) {
    console.log(err);
  }
};
connection();
