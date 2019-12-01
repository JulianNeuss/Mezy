var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var country = new Schema({
    _id: mongoose.Types.ObjectId,
    id: Number,
    name: String,
});

module.exports = mongoose.model('Country', country, 'country');