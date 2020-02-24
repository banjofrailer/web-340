/*
============================================
; Title:  kovar-exercise-1.3.js
; Author: Sarah Kovar
; Date:   23 February 2020
; Description: node.js modules
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 1.3'));

var url = require("url");

var parsedURL = url.parse('https://news.google.com/?hl=en-US&gl=US&ceid=US:en');

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);