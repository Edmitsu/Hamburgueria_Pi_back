const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotesSchema = new Schema({
    paes: String,
    carnes: String,
    opcionais:String,
    state:{
        type: Boolean,
        default: false
    },
    id_user:{
        ref: 'Notes',
        type: Schema.Types.ObjectId
    }
})

var Note = mongoose.model('Note', NotesSchema);

module.exports = Note;