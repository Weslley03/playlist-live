require("dotenv").config();
const express = require("express");
const conectToDb = require("./database/db");
const path = require("path");
const Music = require("./models/Music");

const app = express();
conectToDb();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/admin", (req, res) => {
  res.render("admin");
});

app.post("/create", async (req, res) => {
  const music = req.body;
  await Music.create(music);
  res.redirect("/");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running at ${PORT} port`);
});
