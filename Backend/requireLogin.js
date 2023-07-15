const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('./keys')
const mongoose = require('mongoose')
const User = mongoose.model("User")

module.exports = (req,res,next) => {
    const {authorization} = req.headers
    if(!authorization){
        console.log("You must be logged in!!!")
       return res.send({message: "You must be logged in!!"})
    //    return console.log("You must be logged in!!")
    }
    const token = authorization.replace("Bearer ","")
    console.log(token)
    console.log({JWT_SECRET})
    jwt.verify(token,JWT_SECRET,(err,payload) =>{
        if(err){
            console.log("You must be logged in!!!!")
         return  res.send({message: "You must be logged in!"})
        // return console.log("You must be logged in!!")
        }

    //destructuring id
    const {_id} =payload
     //finding user by id
     User.findById(_id).then(userdata =>{
        req.user = userdata 
        next() 
        //to stop n continue next middleware
    })
   
    })
   
}