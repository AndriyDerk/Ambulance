const { Model } = require('mongoose')
const db = require('../ext/db')
const medicalHistory = require('../models/MedicalHistory')

class medicalHistoryController {
    async findHistory(req, res, next){// TODO : воно хоч пахає?  +  ЗРОБИТИ ВИДАЧУ ПО ~5
        if(req.user.role == "USER"){
            const email = req.user.email
            const history = await medicalHistory.find({email: email, $orderBy: { end: 1 } })// TODO : перевірити!
            return res.json({history})
        }
        if(req.doctor.role == "DOCTOR"){
            const id = req.doctor._id
            const history = await medicalHistory.find({doctorId: id, $orderBy: { end: 1 } })// TODO : перевірити!
            return res.json({history})
        }
        console.log("_5")
        return res.json("_5") //TODO : add error
    }
    
    async createHistory(req, res, next){
        const role = req.doctor.role//TODO : + зробити окремо для адміна? Воно береться лише від doctor?
        if(role == "USER"){// TODO : тут взагалі може бути юзер?
            console.log("6")
            return res.json("6") //TODO : add error
        }
        const {userId, illnessId, begin, end, symptoms, doctorId} = req.body
        const history = new medicalHistory({
            _id: new db.Types.ObjectId(),
            userId: userId,
            illnessId: illnessId,
            begin: begin,
            end: end,
            symptoms: symptoms,
            doctorId: doctorId
        })

        history.save()
        return res.json({history})
    }

    async setEnd(req, res, next){
        const role = req.doctor.role//TODO : + зробити окремо для адміна? Воно береться лише відdoctor?
        if(role == "USER"){
            console.log("6")
            return res.json("6") //TODO : add error
        }

        const id = req._id// TODO : мб якось інакше(зручніше) передавати?
        const history = await medicalHistory.findOne({ _id: id})
        Model.updateOne(history, {end: Date.now}) // TODO : Дата працює? Просто update? await треба?
        history.save()// TODO : save потрібен?

        return res.json({history})

    }

}

module.exports = new medicalHistoryController()