"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var validate = exports.validate = function validate(value) {
  if (value === "Infinity" || value === Infinity) {
    return "-";
  } else if (isNaN(value) || value === "NaN" || value === NaN || value === undefined || value === "undefined" || value === null) {
    return "N/A";
  } else {
    return value;
  }
};

var validateSign = exports.validateSign = function validateSign(value, returnString) {
  if (value === "Infinity" || value === Infinity) {
    return "";
  } else if (isNaN(value) || value === "NaN" || value === NaN || value === undefined || value === "undefined" || value === null || value === NULL || value === "NULL" || value === "null") {
    return "";
  } else {
    return returnString;
  }
};