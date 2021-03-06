const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    link: {
        type: String,
        require: true
    },
    teaser: {
        type: String,
        require: true
    },
    saved:{
        type: Boolean,
        default: false
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;