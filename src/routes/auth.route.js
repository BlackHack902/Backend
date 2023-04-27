const {signUp} = require('../controllers/auth.controller')

module.exports = (app) =>{
    app.post('/api/signup',signUp);
};