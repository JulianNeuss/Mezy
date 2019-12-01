var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var uni = new Schema({
    _id: mongoose.Types.ObjectId,
    id: Number,
    name: String,
    country_id: Number,
});

module.exports = mongoose.model('Uni', uni, 'uni');