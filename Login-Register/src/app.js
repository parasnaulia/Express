const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const bcrypt = require("bcryptjs");
const auth = require("../src/Auth/auth");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("./connection/conn");
const Para = require("./models/model");
const { resolveSoa } = require("dns");
const views_path = path.join(__dirname, "../templetes/views");
const partial_path = path.join(__dirname, "../templetes/partials");
const static_path = path.join(__dirname, "../public");
app.set("view engine", "hbs");
app.set("views", views_path);
const secretKey =
  "4efc98266f022754cbdb4e5c6d713fc0710ceaa4d45ecd7398248a62e42eb627";
// const Para = require("./models/model");
//Now Setting as a middleware
app.use(cookieParser());

// hbs.registerPartials(partial_path);
hbs.registerPartials(partial_path);
app.use(express.static(static_path));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/home", auth, (req, res) => {
  res.render("home");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/era", (req, res) => {});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/coo", (req, res) => {
  res.send(req.cookies);
});
app.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    let passWord = req.body.Password;
    let cPassWord = req.body.CPassword;
    if (passWord !== cPassWord) {
      res.render("register", {
        err: "Sorry password does not match",
      });
    } else {
      const data = new Para({
        name: req.body.name,
        age: req.body.age,
        email: req.body.Email,
        address: req.body.add,
        Password: req.body.Password,
        CPassword: req.body.CPassword,
        Gender: req.body.gender,
      });
      const token = await data.ger();
      res.cookie("jwt111", token, {
        expires: new Date(Date.now() + 86400000), // Expires in 1 day (86400000 milliseconds)
        httpOnly: true, // HTTP-only cookie
        secure: true, // Send only over HTTPS if true, set to false for development over HTTP
        sameSite: "strict", // Restrict the cookie to be sent with "sameSite" policy
      });
      console.log(`The Token is ${token}`);
      const db = await data.save();
      //console.log(db);
      console.log("Data HAS BEEN SEND TO DATABASE");
      res.send("Thank You For registering");

      res.render("omg", { name: req.body.name });
    }
  } catch (err) {
    res.send("Something went Wrong");
  }
});
app.get("/logout", async (req, res) => {
  try {
    // res.send("Welocme To LogOut");
    const data = req.cookies.jwt111;
    const verifyUser = await jwt.verify(data, secretKey);
    console.log(verifyUser);
    //Now this verify will give us user id and then do opertaion dirxtly on
    //database
    console.log("This is my cookie " + data);
    const id = verifyUser._id;
    console.log(id);
    const findData = await Para.findOne({ _id: id });
    console.log(findData);
    // findData.tokens = [];
    //Logout All devices
    findData.tokens = findData.tokens.filter((ele) => {
      return ele != req.cookies.jwt111;
    });
    // here we have logout only the user browser
    await findData.save();
    // console.log(req.user);
    // res.send(req.user);

    res.clearCookie("jwt111");
    res.render("login");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});
app.post("/login", async (req, res) => {
  let mail = req.body.Email;
  let pass = req.body.Password;
  // console.log(`${mail} password is ${pass}`);
  const data = await Para.findOne({ email: mail });
  const hash1 = bcrypt.compare(pass, data.Password);
  console.log("This is my dala pass" + pass);
  console.log("this is my hash one" + data.Password);
  console.log("The login hash" + hash1);
  const tokken = await data.ger();
  res.cookie("jwt111", tokken);
  // console.log("data has been saved token is send to database" + login1);
  //   console.log(data);
  if (data) {
    if (hash1) {
      console.log("correct password");
      return res.render("omg", { name: data.name });
    } else {
      res.render("login", {
        err: "Invalid email or Password",
      });
    }
  } else {
    res.render("login", {
      error: "No such user",
    });
  }
});

app.listen(3000, () => {
  console.log("App is Listing at Port 3000");
});

//For everything that we are using we have to tell the express app that we are using it
// like partial handlebars

//Now my aim to is set token
