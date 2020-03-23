/*
============================================
; Title:  kovar-exercise-5.2.js
; Author: Professor Krasso
; Modified by: Sarah Kovar
; Date:  22 March 2020
; Description: EJS if...else...render
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 5.2'));

var express = require("express");

var http = require("http");

var path = require("path");

app = express();

app.set("view engine", "ejs");

app.set("views", path.resolve(__dirname, "views"));

var n = ["Sally", "Sandra", "Liz", "Elizabeth", "Beth"];

app.get("/", function(request, response){

  response.render("index", {

    names:n

  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});