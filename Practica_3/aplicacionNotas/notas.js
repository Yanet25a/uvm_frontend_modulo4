const fs = require("fs");

const addNote = (title, body) => { //agrega notas
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) { // si la nota no está guardada
        notes.push({ // la agrega en el arreglo
            title: title,
            body: body
        })
        saveNotes(notes); // la guarda en el arhivo
        console.log("Título: "+ title);
        console.log("Cuerpo: "+ body);
        console.log("Nota agregada!");
    } else {
        console.log("Esta nota ya está guardada!");
    }
}

const removeNote = (title) => { // borra la nota
    const notes = loadNotes(); //recupera las notas
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
        console.log("Nota borrada!");
        saveNotes(notesToKeep);
    } else {
        console.log("Nota no encontrada!");
    }    
}

const listNotes = () => {
    const notes = loadNotes();

    console.log("Tus notas:");

    notes.forEach((note) => {
        console.log("Título: "+ note.title);
    })
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log("Título: "+ note.title);
        console.log("Cuerpo: "+ note.body);
    } else {
        console.log("Nota no encontrada!");
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notas.json", dataJSON); //escribe en el archivo
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notas.json"); //lee el archivo
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}