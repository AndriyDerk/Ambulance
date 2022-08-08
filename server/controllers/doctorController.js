const Doctor = require('../models/Doctor')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require('../ext/db')

const generateJWT = (id, email, role) =>{
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class doctorConroller{
    async registration(req, res, next){
        const {firstName, secondName, email, password, dateBirthday, sex, phoneNumber, education, experience, ilnessId, role} = req.body//TODO : додати перевірку всіх параметрів   
        if(!email || !password){
            //TODO : add error
            console.log('1')
            return res.json('1')
        }
        const candidate = await Doctor.findOne({email: email})
        if(candidate){
            //TODO: add error
            console.log('2')
            return res.json('2')
        }
        const hashPassword = await bcrypt.hash(password, 5)//TODO: хешування?
        const doctor = new Doctor({
            _id: new db.Types.ObjectId(),
            firstName: firstName,
            secondName: secondName,
            email: email,
            password: hashPassword,
            dateBirthday: dateBirthday,
            sex: sex,
            phoneNumber: phoneNumber,
            education: education,
            experience: experience,
            ilnessId: ilnessId,
            role: role
        })

        doctor.save()


        const token = generateJWT(doctor._idm, email, role)
        return res.json({token})//TODO: чому в душках?

    }   
    async login(req, res, next){
        const {email, password} = req.body
        if(!email || !password){
            //TODO : add error
            console.log('1')
            return res.json('1')
        }
        const doctor = await Doctor.findOne({email: email})
        if(!doctor){
            //TODO : add error
            console.log('3')
            return res.json('3')
        }
        let comparePassword = await bcrypt.compare(password, doctor.password)//TODO: compare?bcrypt?
        if(!comparePassword){
            //TODO: add error
            console.log('4')
            return res.json('4')
        }
        const token = generateJWT(doctor._id, doctor.email, doctor.role)
        return res.json({token})
    }

    async check(req, res, next){
        const token = generateJWT(req.doctor._id, req.doctor.email, req.doctor.role)
        return res.json({token})
    }

}

module.exports = new doctorConroller()