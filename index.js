const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const contactsRouter = require("./routes/contacts");
const usersRouter = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => res.send("HOLA"));
app.use(usersRouter);
app.use(contactsRouter);

app.listen(process.env.PORT || 5000);
