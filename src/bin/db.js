const mongoose = require('mongoose');

const MONGO_URL = 'mongodb://localhost:27017/manoel';

// models

const Note = require('./models/Note');

class Controller{
    constructor(){
        this.connect();
    }
    async connect(){
        try{
            await mongoose.connect(MONGO_URL, {
                useNewUrlParser: true
            })
            console.info('Connected to DB')
        } catch(err){
            console.error(err);
        }
    }

    //pedidos query
    addNotes(res, data){
        Note.create(data, (err, newNote) =>{
            if (err) throw err;
            res.json({
                message: "Created",
                note:newNote
            })
        })
    }

    //delete os pedidos 
    deleteNotes(res, id){
        Note.deleteOne({
           _id: id 
        }, (err) =>{
           if (err) throw err;
           res.json({
            message:"deletado"
           })
        })
    }

}

exports.db = new Controller();