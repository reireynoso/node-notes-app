// const validator = require('validator') //requiring npm 
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// console.log(notes())

// // console.log(validator.isEmail('example.com'))
// console.log(chalk.blue.bold.inverse("Nodemon"))

// console.log(process.argv[2])

// const command = process.argv[2]

//add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        // console.log('Adding a new node', argv)
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

//remove command 

yargs.command({
    command: "remove",
    describe: "Remove a new note",
    handler: function() {
        console.log('Removing a node')
    }
})

//list command
yargs.command({
    command: "list",
    describe: "Listing all notes",
    handler: function() {
        console.log('List a node')
    }
})

//read command

yargs.command({
    command: "read",
    describe: "Reading all notes",
    handler: function() {
        console.log('Read a node')
    }
})
//add, remove, read, list
// console.log(yargs.argv)
yargs.parse()