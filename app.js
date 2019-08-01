// const validator = require('validator') //requiring npm 
const chalk = require('chalk')
const notes = require('./notes')

console.log(notes())

// console.log(validator.isEmail('example.com'))
console.log(chalk.blue.bold.inverse("Nodemon"))