var Company = require("../models/company");

var findAllCompanies = function(req, res) {
    Company.find(function(err, companies) {
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

        res.status(200).send(JSON.stringify(companies, null, 4));
    });
};

module.exports = {
    index: findAllCompanies
};
