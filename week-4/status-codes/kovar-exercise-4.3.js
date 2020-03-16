/*
============================================
; Title:  kovar-exercise-4.3.js
; Author: Professor Krasso
; Modified by: Sarah Kovar
; Date:  15 March 2020
; Description: HTTP Status Codes
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 4.3'));

var express = require('express');

var http= require('http');

var app = express();

app.get("/not-found", function(request, response) {
  response.status(404);

  response.json({
    error: "Not Found."
  })
});

app.get("/ok", function(request, response) {
  response.status(200);

  response.json({
    message: "Success."
  })
});

app.get("/not-implemented", function(request, response) {
  response.status(501);

  response.json({
    error: "Not implemented."
  })
});

http.createServer(app).listen(8080, function() {
  console.log("Listening on 8080.");
});