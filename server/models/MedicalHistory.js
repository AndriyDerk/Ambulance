const db = require('../ext/db')

const schema = new db.Schema({
    userId: {
        type: ObjectId,
        required: true
    },
    ilnessId: {
        type: ObjectId,
        required: true
    },
    begin: {
        type: Date,
        required: true,
        default: Date.now
    },
    end: {
        type: Date,
    },
    symptoms: {
        type: [String],
        required: true
    },
    doctorId: {
        type: ObjectId,
        required: true
    }
})

module.exports = db.model('MedicakHistory', schema)