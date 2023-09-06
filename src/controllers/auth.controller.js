const User = require('../models/user.model');
const bcrypt = require('bcrypt');
//const secret = require('../config/auth.config');
const {sendEmail} = require('../utlis/sendMail');
const {userRegistration} = require('../script/scriptMail')

const signUp = async(req,res)=>{
    const userObj = {
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password, 8)
    };
    try{
        const user = await User.create(userObj);
        res.status(200).send(user);
        const {subject,html} = userRegistration(user);

        sendEmail([user.email],subject,html);
    }catch(err){
        res.status(500).send({
            msg:"Somthing Wrong",
        })
    }
};

const signIn = async (req,res) =>{
    const user = await User.findOne({email:req.body.email});
    if(user === null){
        return res.status(400).send({message:"invalid creds"});
    };

    const isPasswordValid = bcrypt.compareSync(req.body.password,user.password);
    if(!isPasswordValid){
        return res.status(400).send({message:"invalid creds"});
    };

    //let token = jwt.sign({email:user.email},secret,{expiresIn:86400});

    res.status(200).send({
        firstname:user.firstname,
        lastname:user.lastname,
        email:user.email,
        //accessToken:token
    });
};



module.exports = {
    signUp,
    signIn
}