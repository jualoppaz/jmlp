var ExtraTraining = require("../models/extraTraining");

var findAllExtraTraining = function(req, res) {
    ExtraTraining.find(function(err, extraTraining) {
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

        res.status(200).send(JSON.stringify(extraTraining, null, 4));
    });
};

module.exports = {
    index: findAllExtraTraining
};
