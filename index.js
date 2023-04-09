const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const connectDb = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express();
const dotenv=require('dotenv').config()
const contactRouter=require('./routes/contact')
const videoRouter = require('./routes/video')
const adminAuthRouter=require('./routes/adminauth');
const reviewRouter = require("./routes/review");
const newsletterRouter = require("./routes/newsletter");
const howRouter = require("./routes/howto");

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
  res.render("index");
});
connectDb()
app.use(morgan('tiny'))

app.use("/contact",contactRouter)
app.use("/videos",videoRouter)
app.use("/admin", adminAuthRouter)
app.use('/review', reviewRouter)
app.use('/newsletter',newsletterRouter)
app.use('/documentation',howRouter)
app.use("/privacy-policy", (req, res) => {
  res.render("privacy")
})
app.use("/term-and-conditions", (req, res) => {
  res.render("terms")
})
app.use("/refund-policy", (req, res) => {
  res.render("return")
})
app.use("/shipping-and-delivery-policy", (req, res) => {
  res.render("shipping")
})
app.use(notFound)
app.use(errorHandler)

app.listen(4000, () => {

  console.log("Server is Running");
});
