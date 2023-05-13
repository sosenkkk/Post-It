const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const multer = require("multer");
const fileUpload = require("express-fileupload")
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const dotenv = require('dotenv').config
const feedRoutes = require("./routes/feed");
const authRoutes = require("./routes/auth");
const PORT = process.env.PORT || 8080;
const app = express();



const mongoUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.rfcsb3n.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}`;
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "images");
//   },
//   filename: function (req, file, cb) {
//     cb(null, uuidv4());
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/jpeg"
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.options("*", cors());
app.use(cors());
app.use(bodyParser.json()); // application/json
// app.use(multer({ storage: storage, fileFilter: fileFilter }).single("image"));
app.use(fileUpload({
  useTempFiles:true
}))
app.use("/images", express.static(path.join(__dirname, "images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);
app.use("/auth", authRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const data = error.data;
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(
    mongoUrl+"?retryWrites=true&w=majority"
  )
  .then((res) => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err));
