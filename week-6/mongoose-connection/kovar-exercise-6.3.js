/*
============================================
; Title:  kovar-exercise-6.3.js
; Author: Professor Krasso
; Modified by: Sarah Kovar
; Date:  29 March 2020
; Description: MongoDB Connection Test
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 6.3'));

var express = require("express");

var http = require("http");

var logger = require("morgan");

var mongoose = require("mongoose");

var MongoDB = "mongodb+srv://user:tumbleweed@buwebdev-cluster-1-xhsyh.mongodb.net/test";

mongoose.connect(MongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error:"));

db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
});

var app = express();

app.use(logger("short"));

http.createServer(app).listen(8080, function() {
  console.log("Application connected to port 8080!");
});
