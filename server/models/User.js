const db = require('../ext/db')

const schame = new db.schame({
    fitstName: {
        type: String,
        required: true,
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
        trim: true// 
    },
    registrationDate: { 
        type: Date, 
        default: Date.now }
})

module.exports = db.model('User', schame)