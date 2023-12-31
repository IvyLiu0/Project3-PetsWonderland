const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const expressSession = require('express-session')({
  secret:'secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: 60000
  }
});

app.use(cors());
app.use(bodyParser.json());
require("./app/models/contact.model.js");
app.use(expressSession);

//configuring the database
require("dotenv").config();
const mongoose = require("mongoose");

//connecting to the database
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.log(`Connection error: ${err.message}`);
  });

require("./app/routes/contact.router.js")(app);

//create a server
const server = app.listen(8080, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
