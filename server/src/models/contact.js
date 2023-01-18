const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        default: false
    },
    email: {
        type: String,
        default: false
    },
    color: {
        type: Boolean,
        default: false
    }
}) 

module.exports = new mongoose.model('Contact', contactSchema);