const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/coo", (req, res) => {
  // Set a cookie with options
  res.cookie("jwt", "paras", {
    expires: new Date(Date.now() + 86400000), // Expires in 1 day (86400000 milliseconds)
    httpOnly: true, // HTTP-only cookie
    secure: true, // Send only over HTTPS if true, set to false for development over HTTP
    sameSite: "strict", // Restrict the cookie to be sent with "sameSite" policy
  });
  res.cookie("jwt1", "paras1", {
    expires: new Date(Date.now() + 86400000), // Expires in 1 day (86400000 milliseconds)
    httpOnly: true, // HTTP-only cookie
    secure: true, // Send only over HTTPS if true, set to false for development over HTTP
    sameSite: "strict", // Restrict the cookie to be sent with "sameSite" policy
  });

  // Send a response to acknowledge that the cookie has been set
  res.send("Cookie has been set!");
});
app.get("/coog", (req, res) => {
  res.send(req.cookies);
});
app.listen(4000, () => {
  console.log("Listening on port 4000");
});
