const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const {db} = require('./db')

// rodas das pedidos
app.post('/api/notes/', (req, res) =>{
    let data = req.body;
    db.addNotes(res, data);
})
// delete pedidos 
app.delete('/api/notes/:id', (req, res) =>{
    let {id} = req.params;
    db.deleteNotes(res, id);
})

exports.app = app;