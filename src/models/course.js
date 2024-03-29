var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var course = new Schema({
    _id: mongoose.Types.ObjectId,
    uni_id: Number,
    carrer_id: Number,
    materia_externa: String,
    materia_itba: String,
    creditos_electiva: Number,
    creditos_seminario: Number,
    estado: String
});

module.exports = mongoose.model('Course', course, 'courses');
