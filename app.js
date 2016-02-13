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

var router = require('./app/server/router');

app.use(router);

var port = process.env.port || 3000;

app.listen(port, function() {
    console.log("Node server running on http://localhost:", port);
});