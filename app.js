const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const bcrypt = require("bcrypt");
const saltRounds = 5;

const mysql = require("mysql");
const res = require("express/lib/response");
const con = mysql.createConnection({
    user: "sql5582571",
    password: "ec3txGsPs8",
    host: "sql5.freesqldatabase.com",
    database: "sql5582571",
    port: "3306",
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.use( bodyParser.urlencoded({extended: true,}));
app.use(bodyParser.json());

app.use("/static", express.static(__dirname + "/static"));

app.use("/", router);
app.use("/schedule", router);
app.use("/syllabus", router);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/schedule", (req, res) => {
  res.sendFile(__dirname + "/public/schedule.html");
});

app.get("/syllabus", (req, res) => {
  res.sendFile(__dirname + "/public/syllabus.html");
});

app.post("/", (req, res) => {
  console.log("checking user in database");

  let username = req.body.username;
  let password = req.body.password;

  var sql = "SELECT * FROM User WHERE username = '" + username + "';";

  con.query(sql, function (err, result) {
    if (err) throw err;
    if (result.length > 0) {
      
        sql = "SELECT password FROM User WHERE username = '" + username + "';";

        con.query(sql, function (err, result) {
            if (err) throw err;

            let pass = result[0].password;
            bcrypt.compare(password, pass, function(err, result) {
                if (result) {
                    console.log("Password is correct");
                    res.redirect("/schedule");
                }
                else {
                    console.log("Password is incorrect");
                    res.redirect("/")
                }
            });
        });
    } 
    else {
      console.log("User not found, creating new profile");

      bcrypt.hash(password, saltRounds, function(err, hash) {
        sql = "INSERT INTO User (Username, Password) VALUES ('" + username + "', '" + hash + "');";

      con.query(sql, function (err, result) {
        console.log("New user added");
      });
    });
  
      res.redirect("/schedule");
    }
  });
});


app.post("/schedule", (req, res) => {
  res.redirect("/syllabus");
});

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});
