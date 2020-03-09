/*
============================================
; Title:  kovar-exercise-3.3.js
; Author: Sarah Kovar
; Date:  8 March 2020
; Description: Advanced routing using Morgan.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 3.3'));

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/:employeeId", function(request, response) {
  var employeeId = parseInt(request.params.employeeId, 10);
  response.render("index", {
    employeeId:employeeId
  })
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});