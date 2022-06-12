const connectDB = require("./db/connect");
require ('dotenv').config();
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
app.use(express.json());
app.use(express.static('./public'))
app.use('/api/v1/tasks/', tasks);

const port = 3000;

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, (req, res) => {
            console.log(`Server started on port ${port}`)
        })
    }catch (e) {
        console.log(e);
    }
}

start()

console.log("Task manager")