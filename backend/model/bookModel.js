const mongoose = require('mongoose')
const bookSchema = mongoose.Schema({
    title: String,
    description: String,
    publication_date: Date,
    publisher: String,
    authors: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'authorModel'
    },

},
{
    timestamps: true,
})

module.exports = mongoose.model('Book', bookSchema)