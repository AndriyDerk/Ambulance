    const User = require('../models/User')
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

class userConroller{
    async registration(req, res, next){
        const {firstName, secondName, email, password, dateBirthday, sex, phoneNumber, role} = req.body
        if(!email || !password){
            //TODO : add error
            console.log('1')
            return res.json('1')
        }
        const candidate = await User.findOne({email: email})
        if(candidate){
            //TODO: add error
            console.log('2')
            return res.json('2')
        }
        const hashPassword = await bcrypt.hash(password, 5)//TODO: хешування?
        const user = new User({
            _id: new db.Types.ObjectId(),
            firstName: firstName,
            secondName: secondName,
            email: email,
            password: hashPassword,
            dateBirthday: dateBirthday,
            sex: sex,
            phoneNumber: phoneNumber,
            role: role//TODO: перевірити чи будуть відображатись ролі по дефолту 
        })// TODO: норм тип даних??

        user.save()


        const token = generateJWT(user._idm, email, role)
        return res.json({token})//TODO: чому в душках?

    }   
    async login(req, res, next){
        const {email, password} = req.body
        if(!email || !password){
            //TODO : add error
            console.log('1')
            return res.json('1')
        }
        const user = await User.findOne({email: email})
        if(!user){
            //TODO : add error
            console.log('3')
            return res.json('3')
        }
        let comparePassword = await bcrypt.compare(password, user.password)//TODO: compare?bcrypt?
        if(!comparePassword){
            //TODO: add error
            console.log('4')
            return res.json('4')
        }
        const token = generateJWT(user._id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res, next){І
        const token = generateJWT(req.user._id, req.user.email, req.user.role)
        return res.json({token})
    }

}

module.exports = new userConroller()