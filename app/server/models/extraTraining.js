var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var schema = new Schema(
    {
        image: { type: String },
        date: { type: Date },
        description: { type: String }
    },
    {
        collection: "extra_training"
    }
);

module.exports = mongoose.model("ExtraTraining", schema);
