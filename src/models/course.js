var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var course = new Schema({
    uni: String,
    carrera: String,
    materia_externa: String,
    materia_itba: String,
    creditos_electiva: Number,
    creditos_seminario: Number,
});