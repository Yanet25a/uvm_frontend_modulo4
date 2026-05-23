const yargs = require("yargs");
const notes = require("./notas.js");

// Establece la versión de yargs a utilizar
yargs.version("1.1.0");

// Crea el comando add
yargs.command({
    command: "add",
    describe: "Agrega una nueva nota",
    builder: {
        title: {
            describe: "Título de la nota",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Cuerpo de la nota",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

// Create remove command
yargs.command({
    command: "remove",
    describe: "Borra una nota",
    builder: {
        title: {
            describe: "Título de la nota",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

// Create list command
yargs.command({
    command: "list",
    describe: "Muestra las notas",
    handler() {
        notes.listNotes()
    }
})

// Crea el comando leer
yargs.command({
    command: "read",
    describe: "Muestra una nota",
    builder: {
        title: {
            describe: "Título de la nota",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        if(!argv.title){ 
            console.log("Para mostrar la nota, debe proporcionar el título");
        }else{
            console.log("Nota a buscar: "+ argv.title);
            notes.readNote(argv.title);
        }
    }
})

yargs.parse();