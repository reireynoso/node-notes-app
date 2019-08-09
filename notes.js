const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(note => note.title === title)
    const duplicateNote = notes.find(note => note.title === title)
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        // console.log(notes)
        saveNotes(notes)
        console.log(chalk.green.bold.inverse("Added Note!"))
    }
    else{
        console.log(chalk.red.bold.inverse('Duplicate Note!'))
    }
    
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue.bold.inverse('Your Notes'))
    notes.forEach(note => {
        console.log(note.title)
    })
}

const removeNotes = (title) => {
    const notes = loadNotes()
    // console.log(notes[0])
    const notesTitles = notes.map(note => {
        return note.title
    })
    if(notesTitles.includes(title)){
        const removedNotes = notes.filter(note => note.title !== title)
        saveNotes(removedNotes)
        console.log(chalk.green.bold.inverse("Removed!"))
    }
    else{
        console.log(chalk.red.bold.inverse('Note does not exist')) 
    }  
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const readNote = (title) => {
    const notes = loadNotes()
    // console.log(title)
    const match = notes.find(note => title === note.title)
    if(match){
        console.log(match)
    }
    else{
        console.log(chalk.red.bold.inverse('No match!'))
    }
    
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON) 
    }
    catch (e){
        return []
    }
    
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}