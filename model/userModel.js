const mongoose = require('mongoose');

const User = mongoose.model("User",{
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
    }
})

module.exports = User;