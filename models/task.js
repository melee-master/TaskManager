const mongoose = require('mongoose');
const taskSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: [true, "mandatory to specify name"],
        trim: true,
        maxlength: [20, "max length of characters is 20"],
    },
    completed: {
        type: Boolean,
        default: false,
    }
})
module.exports = mongoose.model('Task', taskSchema);
