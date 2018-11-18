var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var schema = new Schema(
    {
        name: { type: String, required: true },
        technologies: [{ type: Schema.Types.ObjectId, ref: "Technology" }],
        startdate: { type: Date, required: true },
        enddate: { type: Date },
        description: { type: String, required: true },
        webUrl: { type: String },
        repositoryUrl: { type: String }
    },
    {
        collection: "personal_projects"
    }
);

module.exports = mongoose.model("PersonalProject", schema);
