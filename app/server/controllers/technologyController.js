var Technology = require("../models/technology");

var findAllTechnologies = function(req, res) {
    Technology.find(function(err, technologies) {
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

        res.status(200).send(JSON.stringify(technologies, null, 4));
    });
};

var findTechnologyById = function(req, res) {
    Technology.findById(req.params.technology_id, function(err, technology) {
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

        res.status(200).send(JSON.stringify(technology, null, 4));
    });
};

module.exports = {
    index: findAllTechnologies,
    show: findTechnologyById
};
