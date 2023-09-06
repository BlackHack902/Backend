const User = require("../models/user.model");

const verifySignUpRequest = async (req,res,next)=>{

    if(!req.body.firstname){
        return res.status(400).send({message:"Failed! First Name doesn't exists"});
    }

    if(!req.body.lastname){
        return res.status(400).send({message:"Failed! Last Name doesn't exists"});
    }
   
   
    if(!req.body.email){
        return res.status(400).send({message:"Failed! email doesn't exists"});
    }

        //validate email

    user = await User.findOne({email:req.body.email});

    if(user!=null){
            return res.status(400).send({message:"Failed! email already exists"});
      }

      next();

}


module.exports={
    verifySignUpRequest
}