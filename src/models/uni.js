var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var uni = new Schema({
    id: Number,
    name: String,
    country_id: Number,
});