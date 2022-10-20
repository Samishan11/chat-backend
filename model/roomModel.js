const mongoose = require('mongoose');

const Chatroom = mongoose.Schema({
    creater:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    user:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model('Chatroom', Chatroom);