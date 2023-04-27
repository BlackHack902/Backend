const mongo = require('mongoose');

mongo.connect(process.env.MONGO_DB)
.then(()=>{
    console.log('DB connect');
})
.catch((err)=>{
    console.log(err)
});