const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const feedRoutes = require("./routes/feed");

const app = express();

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname , 'images')));

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

app.use((error, req, res, next)=>{
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({message : message})
})

mongoose
  .connect(
    "mongodb+srv://sosenkkk:sosenk@cluster0.rfcsb3n.mongodb.net/feed?retryWrites=true&w=majority"
  )
  .then((res) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
