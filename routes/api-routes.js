const fs = require("fs");
let notes = require('../db/db.json');
const path = require('path');
// const notes = JSON.parse(fs.readFileSync("./Develop/db/db.json"));
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        // const notes = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
        res.json(notes);
    })
    app.post('/api/notes', (req, res) => {
        const newNote = req.body;
        notes.push(newNote);
        fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));
        res.json(notes);
    });

    app.post('/api/notes2', (req, res) => {
        const id = uuidv4();
        console.log(id);
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: id
        };
        notes.push(newNote);
        fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));
        res.json(notes);
    });

    app.delete('/api/notes/:id'), (req, res) => {
        const id = req.params.id

    }


}