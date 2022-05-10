const mongoose = require('mongoose')

const authorSchema = mongoose.Schema({
    text: {
        type: String,
        required:[true, 'please add text now']
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Author', authorSchema)