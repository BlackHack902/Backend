const app = require('./app');
const {PORT} = require('./src/config/server.config');
require('./src/config/db.config');


//Route

require('./src/routes/auth.route')(app);

// app.get('/api/',(req,res)=>{
//     res.status(200).send({
//         msg:"Welcome",
//     });
// });                                                                                 



app.listen(PORT,()=>console.log(`App running on ${PORT}`));
