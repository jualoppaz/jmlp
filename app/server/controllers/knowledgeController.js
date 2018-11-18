var Knowledge = require("../models/knowledge");
var KnowledgeType = require("../models/knowledgeType");
var Technology = require("../models/technology");

var findAllKnowledge = function(req, res) {
    var knowledgeTypeParams = {};

    if (req.query.type) {
        knowledgeTypeParams.name = req.query.type;
    }

    Knowledge.find(function(err, knowledge) {
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

        Technology.populate(knowledge, { path: "technology" }, function(
            err,
            knowledge
        ) {
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

            KnowledgeType.populate(
                knowledge,
                {
                    path: "type"
                },
                function(err, knowledge) {
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

                    if (knowledgeTypeParams.name) {
                        knowledge = knowledge.filter(function(item) {
                            return item.type.name === knowledgeTypeParams.name;
                        });
                    }

                    knowledge.sort(function(a, b) {
                        return a.technology.name.localeCompare(
                            b.technology.name
                        );
                    });

                    res.status(200).send(JSON.stringify(knowledge, null, 4));
                }
            );
        });
    });
};

module.exports = {
    index: findAllKnowledge
};
