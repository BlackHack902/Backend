const mongo = require('mongoose');

const userSchema = new mongo.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
});

const User = mongo.model('User',userSchema);

module.exports = User;