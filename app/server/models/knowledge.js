var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var schema = new Schema(
    {
        level: { type: Number, min: 1, max: 3 },
        type: { type: Schema.Types.ObjectId, ref: "KnowledgeType" },
        technology: { type: Schema.Types.ObjectId, ref: "Technology" }
    },
    {
        collection: "knowledge"
    }
);

module.exports = mongoose.model("Knowledge", schema);
