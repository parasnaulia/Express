const express = require("express");
const app = express();
require("./connection/connection");
const Para = require("./models/models");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is created");
});
app.post("/users", async (req, res) => {
  console.log(req.body);
  const pp = new Para(req.body);
  const save1 = await pp.save();
  console.log("Data is beign saved sucessfully in your DataBase");
  res.send(req.body);
});
app.get("/users", async (req, res) => {
  console.log("Now Getting a Data");
  const get_Data = await Para.find();
  console.log(get_Data);
  res.send(get_Data);
});

app.get("/users/:id", async (req, res) => {
  console.log("Now Getting a Data");
  const get_Data = await Para.findById({ _id: req.params.id });
  console.log(get_Data);
  res.send(get_Data);
});
app.patch("/users/:id", async (req, res) => {
  console.log("updating The Value");
  const up = await Para.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    {
      new: true,
    }
  );
  console.log(up);
  res.send(up);
});
// app.delete("/users/:id", async (req, res) => {
//   console.log("Now Going To Delete The Data");
//   const del = await Para.findByIdAndDelete(req.params.id, { new: true });
//   console.log(del);
//   res.send(del);
// });
app.delete("/users/:id", async (req, res) => {
  try {
    console.log("Finally Deleting The Data From DataBase");
    const del = await Para.findByIdAndDelete(req.params.id);
    console.log(del);
    res.send(del);
  } catch (err) {
    console.log(err);
  }
});
app.listen(3000, () => {
  console.log("Server is Listing at port 3000");
});

//Now finally We have created a Rest api
// Now we have perfomed two operations
//Now we are remaining with 2 opertion that is update and delete
//Now finally we have done crud operations
// in our database by following the REST Principles
