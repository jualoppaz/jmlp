var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose"),
    path = require("path");

const http = require("http");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(express.static("public"));

app.set("views", path.join(__dirname + "/app/server/views"));
app.set("view engine", "pug");

var cadena_bbdd = "";

if (process.env.MONGOLAB_URL) {
    cadena_bbdd = process.env.MONGOLAB_URL;
} else {
    cadena_bbdd = "mongodb://127.0.0.1/jmlp";
}

mongoose.connect(
    cadena_bbdd,
    {
        useMongoClient: true
    }
);

mongoose.connection.on("connected", function() {
    console.log("Connected to Database");
});

mongoose.connection.on("error", function(err) {
    console.log("ERROR: connecting to Database. " + err);
});

var router = require("./app/server/router");

app.use(router);

var port = process.env.PORT || 3000;

if (process.env.PORT) {
    app.listen(port, function() {
        console.log("App listening on port " + port);
    });
} else {
    exports.startServer = function(port, path, callback) {
        server = http.createServer(app);

        server.listen(parseInt(port, 10), callback);

        return server;
    };
}
