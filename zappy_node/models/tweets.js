const mongoose = require('mongoose');

//create a new schema
Schema = mongoose.Schema;

const postSchema = new Schema({
    screen_name: String,
    picture: String,
    tweeted_at: String,
    tweet_text: String

});


//Create a new collection called 'Post'

const Post = mongoose.model('Post', postSchema);
module.exports = Post;