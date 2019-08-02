// const validator = require('validator') //requiring npm 
const chalk = require('chalk')
const notes = require('./notes')

// console.log(notes())

// // console.log(validator.isEmail('example.com'))
// console.log(chalk.blue.bold.inverse("Nodemon"))

// console.log(process.argv[2])

const command = process.argv[2]

if(command === 'add'){
    console.log('Add')
}