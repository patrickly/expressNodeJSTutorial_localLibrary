var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var genreInstanceSchema = ({
  name : {type: String, required = true, minlength = 3, maxlength = 100}
});

// Virtual for genreinstance's URL
genreInstanceSchema
.virtual('url')
.get(function (){
  return '/catalog/genreinstance/' + this._id;
})


module.exports = mongoose.model('Genre', genreInstanceSchema);
