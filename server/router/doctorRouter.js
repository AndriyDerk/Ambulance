const Router = require('express')
const router = new Router()
const doctorController = require('../controllers/doctorController')

router.post('/registration', doctorController.registration)
router.post('/login', doctorController.login)
router.get('/auth', doctorController.check)

module.exports = router
