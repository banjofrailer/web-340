/*
============================================
; Title:  kovar-exercise-7.2.js
; Author: Professor Krasso
; Date:   5 April 2020
; Modified by: Sarah Kovar
; Description: TDD test case
;===========================================
*/

/*// Require statement that imports the header.js file from my root directory
const header = require('../../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 7.2'));*/

var assert = require("assert");

describe("String#split", function() {
  it("should return an array of fruits", function() {
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
  });
});

function getFruits(str) {
  return str.split(',');
}

module.exports = getFruits;
