const express = require('express');
const app = express();
require('./db/conn');
const Task = require('./models/task');
const port = process.env.PORT || 3000;

app.use(express.json());
//ccreate a user
app.post("/task", async(req, res) => {
    try{
        const user = new Task(req.body);
        const createUser= await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
      
})

// read the data of Task
app.get("/task/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const taskData = await Task.findById(_id);
        res.send(taskData);
    }catch(e){
        res.send(e);
    }
      
})

// update the task by it id
app.patch("/task/:id", async (req, res) =>{
    try{
        const _id = req.params.id;
        const updateTask = await Task.findIdAndUpdate(_id,req.body,{
            new : true
        });
        res.send(updateTask);
        
    }catch(e){
        res.status(400).send(e);
    }

})
// delete the task by it id
app.delete("/task/:id", async(req,res) =>{
    try{
        const id = req.params.id;
        const deleteTask = await Task.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(deleteTask);


    }catch(e){
        res.status(500).send(e);

    }
})

app.listen(port, () =>{
 console.log('connection is at ${port}');   
})