var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var schema = new Schema(
    {
        name: { type: String },
        image: { type: String }
    },
    {
        collection: "technologies"
    }
);

module.exports = mongoose.model("Technology", schema);
