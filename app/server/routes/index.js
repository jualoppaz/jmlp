module.exports = function(router) {
    var ev = require("express-validation");
    ev.options({
        status: 422,
        statusText: "Unprocessable Entity"
    });

    // Controllers
    var technologyController = require("../controllers/technologyController");
    var knowledgeController = require("../controllers/knowledgeController");
    var personalProjectController = require("../controllers/personalProjectController");

    // Validations
    var validationsTechnology = require("../validations/technologyValidations");
    var validationsKnowledge = require("../validations/knowledgeValidations");

    var express = require("express");
    var apiRouter = express.Router();
    apiRouter.route("/technologies").get(technologyController.index);

    apiRouter
        .route("/technologies/:technology_id")
        .get(
            ev(validationsTechnology.findTechnologyById),
            technologyController.show
        );

    apiRouter
        .route("/knowledge")
        .get(
            ev(validationsKnowledge.findAllKnowledge),
            knowledgeController.index
        );

    apiRouter.route("/personal-projects").get(personalProjectController.index);

    router.use("/api", apiRouter);
};
