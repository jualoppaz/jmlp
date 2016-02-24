var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose'),
    path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(__dirname + '/app/public'));

app.set('views', path.join(__dirname + '/app/server/views'));
app.set('view engine', 'jade');


var cadena_bbdd = "";

if(process.env.MONGOLAB_URL){
    cadena_bbdd = process.env.MONGOLAB_URL;
}else{
    cadena_bbdd = 'mongodb://localhost/jmlp';
}

mongoose.connect(cadena_bbdd, function(err, res) {
    if(err) {
        console.log('ERROR: connecting to Database. ' + err);
    } else {
        console.log('Connected to Database');
    }
});

var router = require('./app/server/router');

app.use(router);

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("Node server running on http://localhost:", port);
});