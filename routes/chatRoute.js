const express = require('express');
const { getMessages, createRoom, getRoom, chatroomcreater, chatroomuser } = require('../controller/chatController');
const route = express.Router()
const auth = require('../middleware/auth')
route.get('/chat/:roomId',getMessages)
route.get('/room/:roomId',getRoom)
route.get('/creater-room',auth.verifyUser,chatroomcreater)
route.get('/u8ser-room',auth.verifyUser,chatroomuser)
route.post('/create-room',auth.verifyUser,createRoom)

module.exports = route;