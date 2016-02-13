var express = require("express");
var router = express.Router();


router.get('/api/*', function(req, res){
   res.status(404).send('not-found');
});

router.get('/*', function(req, res){
    res.render('layout');
});

module.exports = router;