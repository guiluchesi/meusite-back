var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    user: String,
    pw: String,
    profileImg: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;
