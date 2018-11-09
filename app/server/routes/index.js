module.exports = function(router) {
    var technologyController = require("../controllers/technologyController");

    var express = require("express");
    var apiRouter = express.Router();
    apiRouter.route("/technologies").get(technologyController.index);

    router.use("/api", apiRouter);
};
