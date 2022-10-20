const jwt = require("jsonwebtoken");
const User = require('../model/userModel');

// middlewarre api to verify the user 
module.exports.verifyUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        // console.log(token);
        const data = jwt.verify(token, "secretkey");
        // console.log(data);
        await User.findOne({ _id: data.userId }).then((result) =>{
            req.userInfo = result;
            // console.log(result);
            next();
        }).catch((e) => {
            res.json({ 'error': e })
        })
    } catch (e) {
        console.log(e)
        res.json({ "error": e })
    }
}