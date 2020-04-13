/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   29 March 2020
; Modified By: Sarah Kovar
; Description: Demonstrates EJS layouts.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 6.4'));

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
var Employee = require("./models/employee");
//require helmet for xss
var helmet = require("helmet");
//require body-parser, cookie-parser, and csurf
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");

//mongo database connection
var MongoDB = "mongodb+srv://user:tumbleweed@buwebdev-cluster-1-xhsyh.mongodb.net/test";
mongoose.connect(MongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance!");
});


var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
//use helmet for xss
app.use(helmet.xssFilter());
//use body-parser
app.use(bodyParser.urlencoded({extended: true}));
//use cookie-parser
app.use(cookieParser());
//use csrf protection
app.use(csrfProtection);
app.use(function(request, response, next){
  var token = request.csrfToken();
  response.cookie("XSRF-TOKEN", token);
  response.locals.csrfToken = token;
  next();
})
//set up csrf protection
var csrfProtection = csrf({cookie: true});

app.get("/", function(request, response) {
  response.render("index", {
    title: "Home page",
    message: "XSS Prevention Example"
  });
});

app.post("/process", function(request, response){
  console.log(request.body.firstName);
  response.redirect("/");
})

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});