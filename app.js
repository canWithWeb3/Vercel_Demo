// express
const express = require("express");
const app = express();

// node modules
const path = require("path");

// routes
const userRoutes = require("./routes/user.js")

// template engine
app.set("view engine", "ejs");

// middleware
app.use(express.urlencoded({ extended: false }))

app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));

app.use(userRoutes);

app.listen(3000, function() {
    console.log("listening on port 3000");
});