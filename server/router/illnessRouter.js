const Router = require('express')
const router = new Router()
const illnessController = require('../controllers/illnessController')

router.post('/create', illnessController.createIllness)
router.get('/find', illnessController.findByName)

module.exports = router