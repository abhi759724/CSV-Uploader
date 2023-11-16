const express = require("express");
const app = express();
const expressLayout = require("express-ejs-layouts");
const path = require("path");
require("dotenv").config();

// import mongoose from config
const db = require("./config/mongoose");

// create sass middleware instance
const sassMiddleware = require("node-sass-middleware");

// sass middleware to convert sass into css
app.use(
  sassMiddleware({
    src: "./assets/scss",
    dest: "./assets/css",
    debug: true,
    outputStyle: "extended",
    prefix: "/css",
  })
);

app.use(express.urlencoded({ extended: true }));
// static files
app.use(express.static("./assets"));

// layout instance
app.use(expressLayout);

// extract styles and scripts from sub layouts to layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// import routes
app.use("/", require("./routes/index"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
