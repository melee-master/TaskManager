const connectDB = require("./db/connect");

const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
app.get('/hello', (req, res)=>{
    res.send("Task Manager");
})

app.use(express.json())

app.use('/api/v1/tasks/', tasks);

const port = 3000;

const start = async()=>{
    try {
        await connectDB()
        app.listen(port, (req, res) => {
            console.log(`Server started on port ${port}`)
        })
    }catch (e) {
        console.log(e);
    }
}

start()

console.log("Task manager")