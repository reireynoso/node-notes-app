const validator = require('validator') //requiring npm 
const notes = require('./notes')

console.log(notes())

console.log(validator.isEmail('example.com'))