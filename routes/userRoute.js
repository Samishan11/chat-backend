const express = require('express');
const { register, login, getUser, getOneUser } = require('../controller/userController');
const route = express.Router()

route.post('/register',register)
route.post('/login',login)
route.get('/get-user',getUser)
route.get('/getuser/:userId',getOneUser)

module.exports = route;
