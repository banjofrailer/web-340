/*
============================================
; Title:  employee.js
; Author: Professor Krasso
; Date:   5 April 2020
; Modified By: Sarah Kovar
; Description: Employee DB File
;===========================================
*/

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//define employee schema
var EmployeeSchema = new Schema({

  firstName: {type: String, required: true},
  lastName: {type: String, required: true}

});

//export model
module.exports = mongoose.model("Employee", EmployeeSchema);
