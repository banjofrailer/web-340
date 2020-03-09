/*
============================================
; Title:  kovar-exercise-3.4.js
; Author: Sarah Kovar
; Date:  8 March 2020
; Description: Simple JavaScript web application
; to demonstrate routing and navigation in Express.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 3.4'));

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function(request, response) {
  response.render("index", {
    message: "home page"
  });
});

app.get("/about", function(request, response) {
  response.render("about", {
    message: "about page"
  });
});

app.get("/contact", function(request, response) {
  response.render("contact", {
    message: "contact page"
  });
});

app.get("/products", function(request, response) {
  response.render("products", {
    message: "product page"
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});