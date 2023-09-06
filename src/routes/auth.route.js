const {signUp,signIn} = require('../controllers/auth.controller')
const {verifySignUpRequest} = require('../middleware/verifySignup')
module.exports = (app) =>{
    app.post('/api/signup',[verifySignUpRequest],signUp);
    app.post('/api/signin',signIn);

};