const db = require('../ext/db')
const Illness = require('../models/Illness')

class illnessController {//TODO : зробити можливістть редагування хвороб ?
    async createIllness(req, res, next){//TODO : перевірити
        const role = req.admin.role//TODO : + Воно береться лише від admin?
        if(role == "USER"){// TODO : тут взагалі може бути юзер?
            console.log("6")
            return res.json("6") //TODO : add error
        }

        const {name, symptoms, description} = req.body
        const illness = new Illness({
            _id: new db.Types.ObjectId(),
            name: name,
            symptoms: symptoms,
            description: description
        })

        illness.save()

        return res.json({illness})
    }

    async findByName(req, res, next){
        const name = req.body.name
        const illness = await Illness.findOne({name: name})
        if(!illness){
            console.log("7")
            return res.json("7") //TODO : add error
        }
        return  res.json({illness})
    }

}

module.exports = new illnessController()