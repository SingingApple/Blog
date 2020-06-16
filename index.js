const express = require("express");
const dotenv = require("dotenv");
const app = express();
const posts = require("./routes/post");
const connectdb = require("./config/db");
dotenv.config({ path: "./config/config.env" });
connectdb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use("/posts/", posts);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
