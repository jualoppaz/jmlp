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
    var extraTrainingController = require("../controllers/extraTrainingController");
    var companyController = require("../controllers/companyController");

    // Validations
    var validationsTechnology = require("../validations/technologyValidations");
    var validationsKnowledge = require("../validations/knowledgeValidations");

    var express = require("express");
    var apiRouter = express.Router();
    var curriculum = express.Router();

    apiRouter.route("/technologies").get(technologyController.index);

    apiRouter
        .route("/technologies/:technology_id")
        .get(
            ev(validationsTechnology.findTechnologyById),
            technologyController.show
        );

    apiRouter.route("/companies").get(companyController.index);

    curriculum
        .route("/knowledge")
        .get(
            ev(validationsKnowledge.findAllKnowledge),
            knowledgeController.index
        );

    curriculum.route("/personal-projects").get(personalProjectController.index);

    curriculum.route("/extra-training").get(extraTrainingController.index);

    apiRouter.use("/cv", curriculum);

    router.use("/api", apiRouter);
};
