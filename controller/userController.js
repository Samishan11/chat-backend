const UserModel = require("../model/userModel")
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email })
        if (user) {
            res.json({ message: 'user already exist', success: 'false' })
        } else {
             const signup = await new UserModel({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                })
                await signup.save()
                res.json({ message: 'user register', success: 'true' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
exports.login = async (req, res) => {
    console.log(req.body);
    try {
        const user = await UserModel.findOne({ email: req.body.email , password:req.body.password })
        console.log(user);
        if (user) {
            const token  = jwt.sign({userId: user._id, username: user.username, email: user.email} , 'secretkey')
            res.json({ message: 'login success', token : token  ,  success: 'true' })
        } else {
            res.json({ message: 'username or password not match',  success: 'false' })

        }
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getUser = async(req,res) =>{
    const user = await UserModel.find()
    res.json(user)
}

exports.getOneUser = async (req,res) =>{
    const user = await UserModel.findOne({_id:req.params.userId})
    console.log(req.params);
    res.json(user)
} 