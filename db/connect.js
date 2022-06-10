const mongoose = require('mongoose');
const connectString = 'mongodb+srv://gaurav:kumar@project01.9dc4n.mongodb.net/?retryWrites=true&w=majority'

const connectDB = (url)=>{
    return mongoose.connect(connectString).then(()=>{
        console.log("connected");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = connectDB