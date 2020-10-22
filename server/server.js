"use strict";
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidatior = require("express-validator");
const helmet = require("helmet");

const app = express();

app.use(
  helmet({
    frameguard: {
      action: "sameorigin",
    },
    contentSecurityPolicy: false,
  })
);

const port = process.env.PORT || 8080;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidatior());
app.use(cookieParser());

if (app.get("env") === "production" || app.get("env") === "stage") {
  app.use(express.static("client/build"));
}

app.use((req, res, next) => {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");

  next();
});

require("./routes")(app);

app.listen(port, () => {
  console.info("NODE_ENV is " + app.get("env"));
  console.info("Server running on port " + port);
});
