//define schema in mongodb
const mongoose = require('mongoose');
const validator = require('validator');

const taskSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    img:{
        type:String,
        required:true
    },
    summary:{
        type:String,
        required:true
    }
})

//create a new collection

const Task = new mongoose.model('Task',taskSchema);
module.exports = Task;