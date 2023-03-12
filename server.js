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
  const pledges = [
    {
      name: "Bamboo Stand",
      min: 25,
      info: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to aspecial Backer member list.",
      stock: 101,
      out: false,
    },
    {
      name: "Black Edition Stand",
      min: 75,
      info: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      stock: 64,
      out: false,
    },
    {
      name: "Mahogany Special Edition",
      min: 200,
      info: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      stock: 0,
      out: true,
    },
  ];
  const stats = await Stat.findOne();
  res.render("index", { stats, pledges });
});
