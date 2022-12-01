const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/static", express.static(__dirname + "/static"));

app.use("/", router);
app.use("/schedule", router);
app.use("/syllabus", router);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/schedule", (req, res) => {
  res.sendFile(__dirname + "/schedule.html");
});

app.get("/syllabus", (req, res) => {
  res.sendFile(__dirname + "/syllabus.html");
});

app.post("/", (req, res) => {
  res.redirect("/schedule");
});

app.post("/schedule", (req, res) => {
  res.redirect("/syllabus");
});

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});
