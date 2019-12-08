const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CommentSchema = new Schema ({
    name: {
        image: String,
    },
    body: {
        type: String,
        required: true
    }
});

const Comment = mongoose.model('Article', CommentSchema);
module.exports = Comment;