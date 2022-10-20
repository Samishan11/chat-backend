const Chatmodel = require("../model/chatModel")
const Room = require("../model/roomModel")

exports.createRoom = async (req,res) =>{
    const room = await Room.findOne({creater:req.userInfo._id , user:req.body.user}) || await Room.findOne({user:req.userInfo._id , creater:req.body.user})
    if(room){
        res.json({data:room_creater , message:"alread exist room"})
    }else{
        const newroom = await new Room({creater:req.userInfo._id , user:req.body.user});
        await newroom.save()
        res.json({data:newroom , message:"room created"})
    }
}

exports.getMessages =  async(req,res)=>{
    const messages = await Chatmodel.find({room:req.params.roomId}).populate('send_to')
    res.json({data:messages})
}

exports.chatroomcreater = (req,res) =>{
    Room.find({creater:req.userInfo._id}).populate('user').populate('creater').then(room=>{
        res.json({data:room})
    })
}
exports.chatroomuser = (req,res) =>{
    Room.find({user:req.userInfo._id}).populate('user').populate('creater').then(room=>{
        res.json({data:room})
    })
}

exports.getRoom =  (req,res)=>{
    Room.findOne({_id:req.params.roomId}).populate('user').populate('creater').then(room=>{
        res.json({data:room})
    })
  
}