const jwt = require("jsonwebtoken");
const Para = require("../models/model");
const secretKey =
  "4efc98266f022754cbdb4e5c6d713fc0710ceaa4d45ecd7398248a62e42eb627";

const auth = async function (req, res, next) {
  //   console.log(req.cookies);
  try {
    const token = req.cookies.jwt111;
    const verifyUser = await jwt.verify(token, secretKey);
    console.log(verifyUser);
    console.log(`The id is ${verifyUser._id}`);
    //Now This Verify user provides a user id but it has its own id but it return
    //user id
    const data = await Para.findOne({ _id: verifyUser._id });
    console.log(data);

    next();
  } catch (err) {
    res.status(401).send("Login first Meri jaan");
  }
};

module.exports = auth;
