const app = require('./app');
const {PORT} = require('./src/config/server.config');

//Route

app.get('/',(req,res)=>{
    res.status(200).send({
        msg:"Welcome"
    });
});                                                                                 



app.listen(PORT,()=>console.log(`App running on ${PORT}`));