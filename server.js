const express = require('express');
const app = express()
const mongoose = require('mongoose')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { Server } = require('socket.io');
const http = require('http');
mongoose.connect("mongodb://127.0.0.1:27017/Chap-App", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to mongodb");
}).catch()

const cors = require("cors")
app.use(cors())

// 
const user = require('./routes/userRoute')
app.use(user)
const chat = require('./routes/chatRoute')
app.use(chat)

// const server = require('./serverSetup')
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});
require('./socket')(io)

server.listen(5000)
module.exports = { io };
