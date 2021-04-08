const express = require('express');
const app = express();
require('./db/conn');
const Task = require('./models/task');
const port = process.env.PORT || 3000;

app.use(express.json());

//add a new user
app.post('/task',(req,res)=>{
    console.log(req.body);
    const user = new Task(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    }) 
    
})

app.listen(port, () =>{
 console.log('connection is at ${port}');   
})

