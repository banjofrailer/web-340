/*
============================================
; Title:  kovar-exercise-4.2.js
; Author: Professor Krasso
; Modified by: Sarah Kovar
; Date:  15 March 2020
; Description: JSON API example
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 4.2'));

var express = require('express');

var http= require('http');

var app = express();

app.get('/customer/:id', function(request, response) {
  var id = parseInt(request.params.id, 10);

  response.json({
    firstName: 'Sally',
    lastName: 'Field',
    customer: true,
    customerID: id
  });
});

http.createServer(app).listen(8080, function() {
  console.log('Application started on port 8080!')
})