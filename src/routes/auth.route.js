const {signUp,signIn} = require('../controllers/auth.controller')

module.exports = (app) =>{
    app.post('/api/signup',signUp);
    app.post('/api/signin',signIn);

};