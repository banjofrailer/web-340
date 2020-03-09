/*
============================================
; Title:  kovar-exercise-3.2.js
; Author: Sarah Kovar
; Date:  8 March 2020
; Description: Application level logging 
; in JavaScript using Morgan.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 3.2'));

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));

app.get("/", function (request, response) {
    response.render("index", {
        message: "Elcomeway Otay Ethay Organmay Oggerlay Exampleyay!"
    });
});

app.get("/test", function (request, response) {
    response.render("index", {
        message: "Elcomeway Otay Ethay Organmay Oggerlay Exampleyay test!"
    });
});

app.get("/test/home", function (request, response) {
    response.render("index", {
        message: "Elcomeway Otay Ethay Organmay Oggerlay Exampleyay test home!"
    });
});

app.get("/test/home/1", function (request, response) {
    response.render("index", {
        message: "Elcomeway Otay Ethay Organmay Oggerlay Exampleyay test home 1!"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080");
});

