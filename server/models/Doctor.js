const db = require('../ext/db')

const schema = new db.Schema({
    firstName: {
        type: String,
        required: true,// TODO: стерти наступне: вказує, що поле обов'язкове
        maxlength: 255,
        minlength: 2,
        trim: true// TODO: стерти наступне: забирає пробіли в кінці і на початку
    },
    secondName: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 2,
        trim: true
    },
    email: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 4,
        trim: true
    },
    password: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 5,
    },
    dateBirthday: {
        type: Date,
        required: true,
    },
    sex: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 2,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        maxlength: 20,
        minlength: 4,
        trim: true
    },
    education: [{
        end: {
            type: String,// TODO: переробити на тип дати
            required: true
        },
        universityName: {
            type: String,
            required: true
        },
        educationName: {
            type: String,
            required: true
        },
        degree: {
            type: String,
            required: true
        }
    }],
    experience: {
        type: [Object],
        default: ''
    },
    ilnessId: {
      //  type: [ObjectId], TODO: object???
        type: [Number],
        required: true
    },
    registrationDate: {     
        type: Date, 
        default: Date.now
    },
    role: {
        type: String,
        default: "DOCTOR"
    }
})

module.exports = db.model('Doctor', schema)