var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var schema = new Schema(
    {
        name: { type: String, required: true },
        technologies: [{ type: Schema.Types.ObjectId, ref: "Technology" }],
        startDate: { type: Date, required: true },
        endDate: { type: Date },
        description: { type: String, required: true },
        links: [
            {
                type: { type: String },
                value: { type: String }
            }
        ],
        repositoryUrl: { type: String }
    },
    {
        collection: "personal_projects"
    }
);

module.exports = mongoose.model("PersonalProject", schema);
