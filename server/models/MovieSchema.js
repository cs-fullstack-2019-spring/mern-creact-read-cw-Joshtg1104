var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    movie_name: String,
    genre: String,
    main_actor: String,
    main_actress: String,
    supporting_actor: String,
    supporting_actress: String
});

module.exports = mongoose.model('Movies', MovieSchema);