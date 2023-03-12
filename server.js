const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

//models
const Stat = require("./models/Stat");

app.listen("3000", () => console.log("listening at port 3000"));

app.set("view engine", "ejs");

app.use(express.static("public"));

mongoose.connect(process.env.DBURI);

app.get("/", async (req, res) => {
  const stats = await Stat.findOne();
  res.render("index", { stats });
});
