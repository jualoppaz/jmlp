var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var temasSchema = new Schema({
    imagen:		{ type: String },
    titulo:		{ type: String }
});


module.exports = mongoose.model('Temas', temasSchema);