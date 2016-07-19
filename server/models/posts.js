var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    content: String,
    published: Boolean,
    title: String,
    slug: String,
    pubDate: Date
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;
