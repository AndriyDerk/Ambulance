const db = require('../ext/db')

const schema = new db.Schema({
    name:{
        type: String,
        required: true,
        maxlength: 255,
        minlength: 2
    },
    symptoms: {
        type: String,
        required: true,
        maxlength: 1000,
        minlength: 2
    },
    description: {
        type: String,
        required: true,
        maxlength: 1000,
        minlength: 2
    }
})

module.exports = db.model('Illness', schema)