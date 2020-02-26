/*
============================================
; Title:  kovar-exercise-2.2.js
; Author: Sarah Kovar
; Date:   25 February 2020
; Description: Express to setup server.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 2.2'));

var express = require("express");

var http = require("http");

var app = express();

app.use(function(request, response) {

   console.log("In comes a request to: " + request.url);

   response.end("Hello World");

});

http.createServer(app).listen(8080);