const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const connectDb = require("./config/dbConnect");
const app = express();
const dotenv=require('dotenv').config()
const contactRouter=require('./routes/contact')
const videoRouter=require('./routes/video')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
// Global middleware
app.use((req, res, next) => {
  res.locals.url = req.protocol + "://" + req.get("host") + req.originalUrl;
  next();
});
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));



app.get("/", (req, res) => {
  res.render("index", { name: "Navdeep" });
});
connectDb()
app.use(morgan('tiny'))

app.use("/contact",contactRouter)
app.use("/videos",videoRouter)

app.listen(4000, () => {

  console.log("Server is Running");
});
