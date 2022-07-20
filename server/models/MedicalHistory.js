const db = require('../ext/db')

const schame = new db.schame({
    userId: {
        type: String,
        required: true
    },
    ilnessId: {
        type: String,
        required: true
    },
    begin: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    symptoms: {
        type: String,
        required: true,
        maxlength: 1000,
    },
    doctorId: {
        type: String,
        required: true
    }
})

module.exports = db.model('MedicakHistory', schame)