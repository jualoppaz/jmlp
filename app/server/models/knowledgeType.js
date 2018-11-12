var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var schema = new Schema(
    {
        name: { type: String }
    },
    {
        collection: "knowledge_types"
    }
);

module.exports = mongoose.model("KnowledgeType", schema);
