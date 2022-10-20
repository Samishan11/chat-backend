const mongoose = require('mongoose');

const chat = mongoose.Schema({
    send_to:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    send_by:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    chat: { type: String },
    room:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room"
    },
    date: {
        type: Date
    }
})

module.exports = mongoose.model('Chat', chat);