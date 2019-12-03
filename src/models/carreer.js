var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var carreer = new Schema({
    _id: mongoose.Types.ObjectId,
    id: Number,
    name: String,
    src: String
});

module.exports = mongoose.model('Carreer', carreer, 'carreers');