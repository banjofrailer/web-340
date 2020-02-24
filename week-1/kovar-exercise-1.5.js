/*
============================================
; Title:  kovar-exercise-1.5.js
; Author: Sarah Kovar
; Date:   23 February 2020
; Description: Node server
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 1.5'));

var http = require("http");

function processRequest(req, res) {

var body = "In a world where node is asynchronous...";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);