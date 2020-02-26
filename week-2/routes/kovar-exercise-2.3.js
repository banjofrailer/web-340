/*
============================================
; Title:  kovar-exercise-2.3.js
; Author: Sarah Kovar
; Date:   25 February 2020
; Description: Demonstrate routes in Express.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 2.3'));

var express = require("express");

var http = require("http");

var app = express();

app.get("/", function(request, response) {

    response.end("Welcome to the homepage!");

});

app.get("/about", function(request, response) {

    response.end("Welcome to the about page!");

});

app.get("/contact", function(request, response) {

    response.end("Welcome to the contact page!");

});

app.use(function(request, response) {

    response.statusCode = 404;

    response.end("404!");

});

http.createServer(app).listen(8080);