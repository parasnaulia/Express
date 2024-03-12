const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
require("./connection/conn");

const Auth = require("./models/models");
const partialPath = path.join(__dirname, "../templates/partials");
const view_path = path.join(__dirname, "../templates/views");
const publicPath = path.join(__dirname, "../public");
// console.log(partialPath)
app.set("view engine", "hbs");
// app.use(exprss.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.set("views", view_path);
hbs.registerPartials(partialPath);

app.use(express.static(publicPath));
app.get("/", (req, res) => {
  res.send("Hello bhai");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.post("/register", async (req, res) => {
  //   res.send("Thank You");
  try {
    console.log(req.body);
    let passWord = req.body.Password;
    let cPassWord = req.body.CPassword;
    if (passWord !== cPassWord) {
      res.render("register", {
        err: "Sorry password does not match",
      });
    } else {
      const data = new Auth({
        name: req.body.name,
        age: req.body.age,
        email: req.body.Email,
        address: req.body.add,
        Password: req.body.Password,
        CPassword: req.body.CPassword,
        Gender: req.body.gender,
      });
      //Now Before saving we have perform ceratin opertion that is bcrypt the password
      const db = await data.save();
      //console.log(db);
      console.log("Data HAS BEEN SEND TO DATABASE");
      //     res.send("Thank You For registering");
      res.render("omg", { name: req.body.name });
    }
  } catch (err) {
    res.send("Something went Wrong");
  }
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.listen(8000, () => {
  console.log("App is listing at port 8000");
});
