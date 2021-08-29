const express = require("express");
const { param } = require('express-validator')

const isValid = require("validate.io-nonnegative-integer");
const app = express()


// Set up route
app.get('/:number', [
  param('number').isInt().toInt()
], (req, res, next) => {

  var isNonNegativeInteger = isValid(req.params.number);

  if(isNonNegativeInteger == true) {
    return res.send("Number " + req.params.number + " is a Non Negative Integer");
  } else {
    return res.send("Number " + req.params.number + " is not an Non Negative Integer");
  }
});


app.listen(3000, () => {
  console.log("Application running on port 3000");
});
