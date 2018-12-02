var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var professionalProjectSchema = new Schema({
    name: { type: String },
    description: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    position: { type: String },
    technologies: [
        {
            type: Schema.Types.ObjectId,
            ref: "Technology"
        }
    ],
    functions: [
        {
            text: { type: String }
        }
    ]
});

var clientSchema = new Schema({
    company: { type: Schema.Types.ObjectId, ref: "Company" },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    description: { type: String },
    projects: [professionalProjectSchema]
});

var schema = new Schema(
    {
        description: { type: String },
        company: { type: Schema.Types.ObjectId, ref: "Company" },
        startDate: { type: Date, required: true },
        endDate: { type: Date },
        projects: [professionalProjectSchema],
        clients: [clientSchema]
    },
    {
        collection: "professional_experiences"
    }
);

module.exports = mongoose.model("ProfessionalExperience", schema);
