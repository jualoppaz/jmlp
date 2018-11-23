var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var schema = new Schema(
    {
        name: { type: String },
        foundationDate: { type: Date },
        image: { type: String },
        web: { type: String }
    },
    {
        collection: "companies"
    }
);

module.exports = mongoose.model("Company", schema);
