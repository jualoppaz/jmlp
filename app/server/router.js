var express = require("express");
var router = express.Router();
var jwt = require('jwt-simple');
var config = require('./config');



function createToken(user) {

    var expire = new Date();
    expire.setSeconds(expire.getSeconds() + 5);

    console.log("Fecha de expiración: " + expire);
    console.log("Fecha actual: " + new Date());

    var payload = {
        exp: expire,
        iat: new Date()
    };

    return jwt.encode(payload, config.tokenSecret);
}

require('./routes/temas/api.js')(router);

router.post('/api/login', function(req, res){

    var user = req.body;

    console.log(req.body);

    if(user.email == "juanmalp1992@gmail.com" && user.password == "12345"){
        var token = createToken(user);
        res.status(200).send({ token: token, user: user });
    }else{
        res.status(400).send('not-valid-login');
    }
});

router.get('/api/*', function(req, res){
   res.status(404).send('not-found');
});

router.get('/*', function(req, res){
    res.render('layout');
});

module.exports = router;