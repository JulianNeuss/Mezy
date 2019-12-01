var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var country = new Schema({
    id: Number,
    name: String,
});