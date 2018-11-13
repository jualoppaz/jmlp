"use strict";

var Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

module.exports = {
    findAllKnowledge: {
        params: {
            type: Joi.objectId()
        }
    }
};
