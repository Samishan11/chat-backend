const Chatmodel = require("./model/chatModel")
module.exports = function (io) {
    io.on("connection", (socket) => {
        socket.on("join-room", (data) => {
            socket.join(data.roomId)
        })
        socket.on("send-message", async (data) => {
            if (data.chat) {
                const createMessage = new Chatmodel(data)
                createMessage.save().then(function (message) {
                    io.to(data.room).emit("get-messages", message)
                })
            }
        })
        socket.on('disconnected',()=>{
            console.log("disconnected")
        })
    })
}