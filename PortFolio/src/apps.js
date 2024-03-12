const express = require("express");
const app = express();
const path = require("path");
let static_Path = path.join(__dirname, "../public");

require("./connection/conn");
const Port = require("./models/models");
app.use(express.static(static_Path));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.send("Hello");
});
app.post("/register", async (req, res) => {
  const data = new Port({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });
  //now i have to Save This data to Database
  const save_Data = await data.save();
  console.log(save_Data);

  // console.log(req.body);
  res.render("Thankyou");
});

app.listen(3000, () => {
  console.log("App is listing at 3000");
});
