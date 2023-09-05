const mongo = require('mongoose');

const userSchema = new mongo.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
});

const User = mongo.model('User',userSchema);

module.exports = User;