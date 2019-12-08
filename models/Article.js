const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ArticleSchema = new Schema ({
    title: {
        image: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    comment: [{
        type: Schema.Types.ObjectId,
        ref: "Comments"
    }]
});

const Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;