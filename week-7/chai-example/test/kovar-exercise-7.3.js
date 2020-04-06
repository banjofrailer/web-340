/*
============================================
; Title:  kovar-exercise-7.3js
; Author: Professor Krasso
; Modified by: Sarah Kovar
; Date:  5 April 2020
; Description: Chai test case
;===========================================
*/
/*
// Require statement that imports the header.js file from my root directory
const header = require('../../kovar-header.js');

// Call the console.log() function and output a well-formatted header
//console.log(header.display('Sarah', 'Kovar', 'Exercise 7.3'));*/

var fruits = require('../kovar-fruits');

var chai = require('chai');

var assert = chai.assert;

describe('fruits', function() {

  it('should return an array of fruits', function() {

  var f = fruits('Apple,Orange,Mango');

  assert(Array.isArray(f));

  });

});