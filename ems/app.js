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
//const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
//console.log(header.display('Sarah', 'Kovar', 'Exercise 6.4'));

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
//set up csrf protection
var csrfProtection = csrf({cookie: true});
//use csrf protection
app.use(csrfProtection);
app.use(function(request, response, next){
  var token = request.csrfToken();
  response.cookie("XSRF-TOKEN", token);
  response.locals.csrfToken = token;
  next();
});


app.get("/", function(request, response) {
  response.render("index", {
    title: "Home page",
    message: "XSS Prevention Example"
  });
});

app.get("/new", function(request, response){
  response.render("new", {
    title: "New"
  });
});

app.post("/process", function(request, response){
  //console.log(request.body.firstName);
  if(!request.body.txtFirstName) {
    response.status(400).send("Everyone has a first name.");
    return;
  }

  //get data from request
var firstName = request.body.txtFirstName;
var lastName = request.body.txtLastName;
console.log(firstName + " " + lastName);

//employee model
var employee = new Employee({
  firstName: firstName,
  lastName: lastName
});

//save employee
employee.save(function(error) {
  if(error) {
    console.log(error);
    throw error;
  } else {
    console.log(firstName + " " + lastName + " successfully saved.");
  }
  response.redirect("/");
});
  
});

//find
app.get("/list", function(request, response){
  Employee.find({}, function(error, employees){
    if(error) throw error;
    response.render("list", {
      title: "Employees",
      employees: employees
    })
  })
})

app.get("/view/:queryName", function (request, response) {
  var queryName = request.params.queryName;
  console.log(queryName);

  Employee.find({ lastName: queryName }, function (error, employees) {
    if (error) throw error;

    console.log(employees);

    if (employees.length > 0) {
      response.render("view", {
        title: "Employee Record",

        employee: employees,
      });
    } else {
      response.redirect("/list");
    }
  });
});


app.set("port", process.env.PORT || 8080);
http.createServer(app).listen(app.get("port"), function() { console.log("Application started on port " + app.get("port"))});
