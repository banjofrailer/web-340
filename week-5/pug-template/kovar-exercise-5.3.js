/*
============================================
; Title:  kovar-exercise-5.3.js
; Author: Professor Krasso
; Modified by: Sarah Kovar
; Date:  22 March 2020
; Description: Pug Templates
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 5.3'));

var express = require("express");

var http = require("http");

var pug = require("pug");

var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "pug");

app.get("/", function(request, response) {

  response.render("index", {

    message:"Built with Pug!"

  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});