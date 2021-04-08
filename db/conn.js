const mongoose = require('mongoose');
// database connction
mongoose.connect("mongodb://localhost:27017/crudapi",{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connection is successful');
}).catch((e) =>{
    console.log('No connection');
})