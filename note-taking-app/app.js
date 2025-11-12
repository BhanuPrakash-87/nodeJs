import express from 'express';
import {getNotes, getNote, createNote} from './database.js'

const app = express();
app.use(express.json());
const PORT = 8090;

app.get('/notes', async (req, res) => {
    const notes = await getNotes();
    res.status(200).send(notes);
});

app.get('/notes/:id', async (req, res) => {
    const id = req.params.id;
    const note = await getNote(id);
    res.status(200).send(note);
});

app.post('/notes', async (req, res) => {
    const {title, contents} = req.body;
    const note = await createNote(title, contents);
    res.status(201).send(note);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500, {'Content-Type': 'text/plain; charset=utf-8'}).send('Something broke! \u2764');
})

app.listen(PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
);