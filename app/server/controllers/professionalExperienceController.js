var ProfessionalExperience = require("../models/professionalExperience");

var findAllProfessionalExperiences = function(req, res) {
    ProfessionalExperience.find()
        .populate({
            path: "company"
        })
        .populate({
            path: "projects.technologies"
        })
        .populate({
            path: "clients.company"
        })
        .populate({
            path: "clients.projects.technologies"
        })
        .exec(function(err, professionalExperiences) {
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

            professionalExperiences.forEach(function(professionalExperience) {
                if (
                    professionalExperience.projects &&
                    professionalExperience.projects.length
                ) {
                    professionalExperience.projects.forEach(function(project) {
                        project.technologies.sort(function(a, b) {
                            return a.name.localeCompare(b.name);
                        });
                    });

                    professionalExperience.projects.sort(function(a, b) {
                        return b.startDate - a.startDate;
                    });
                }

                if (
                    professionalExperience.clients &&
                    professionalExperience.clients.length
                ) {
                    professionalExperience.clients.forEach(function(client) {
                        client.projects.forEach(function(project) {
                            project.technologies.sort(function(a, b) {
                                return a.name.localeCompare(b.name);
                            });
                        });

                        client.projects.sort(function(a, b) {
                            return b.startDate - a.startDate;
                        });
                    });
                }
            });

            professionalExperiences.sort(function(a, b) {
                return b.startDate - a.startDate;
            });

            return res
                .status(200)
                .send(JSON.stringify(professionalExperiences, null, 4));
        });
};

module.exports = {
    index: findAllProfessionalExperiences
};
