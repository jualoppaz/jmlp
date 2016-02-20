module.exports = function(router){

    var Temas = require('../../models/temas.js');

    var findAllTemas = function(req, res){
        Temas.find(function(err, temas){
            if(err){
                console.log(err);
                res.send(err);
            }else{
                res.send(temas);
            }
        })
    };

    router.get('/api/temas', findAllTemas);

};