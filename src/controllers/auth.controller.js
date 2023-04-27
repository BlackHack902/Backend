const User = require('../models/user.model');


const signUp = async(req,res)=>{
    const userObj = {
        name:req.body.name,
        email:req.body.email
    };
    try{
        const user = await User.create(userObj);
        res.status(200).send(user);
    }catch(err){
        res.status(500).send({
            msg:"Somthing Wrong",
        })
    }
};


module.exports = {
    signUp
}