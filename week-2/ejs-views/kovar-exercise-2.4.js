/*
============================================
; Title:  kovar-exercise-2.4.js
; Author: Sarah Kovar
; Date:   1 March 2020
; Description: EJS views.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 2.4'));

var http = require("http");

var express = require("express");

var path = require("path");

var app = express();

//Tell express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views"))

//Tell express to use the EJS view engine
app.set("view engine", "ejs");

app.get("/", function(request, response){
  response.render("index", {
    firstName: "Sarah",

    lastName: "Kovar",

    address: "1024 N. 60th Street, Lincoln, NE 68505"
  });

});

http.createServer(app).listen(8080, function() {
  console.log("EJS-Views app started on port 8080");
});