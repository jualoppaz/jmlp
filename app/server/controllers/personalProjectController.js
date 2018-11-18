var PersonalProject = require("../models/personalProject");
var Technology = require("../models/technology");

var findAllPersonalProjects = function(req, res) {
    PersonalProject.find(function(err, personalProjects) {
        if (err) {
            return res.status(400).send(
                JSON.stringify(
                    {
                        message: err
                    },
                    null,
                    4
                )
            );
        }

        Technology.populate(
            personalProjects,
            {
                path: "technologies"
            },
            function(err, personalProjects) {
                if (err) {
                    return res.status(400).send(
                        JSON.stringify(
                            {
                                message: err
                            },
                            null,
                            4
                        )
                    );
                }

                personalProjects.sort(function(a, b) {
                    return b.startDate - a.startDate;
                });

                res.status(200).send(JSON.stringify(personalProjects, null, 4));
            }
        );
    });
};

module.exports = {
    index: findAllPersonalProjects
};
