module.exports = function(router) {
    var ev = require("express-validation");
    ev.options({
        status: 422,
        statusText: "Unprocessable Entity"
    });

    var technologyController = require("../controllers/technologyController");
    var validationsTechnology = require("../validations/technologyValidations");

    var express = require("express");
    var apiRouter = express.Router();
    apiRouter.route("/technologies").get(technologyController.index);

    apiRouter
        .route("/technologies/:technology_id")
        .get(
            ev(validationsTechnology.findTechnologyById),
            technologyController.show
        );

    router.use("/api", apiRouter);
};
