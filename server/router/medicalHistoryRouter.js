const Router = require('express')
const router = new Router()
const medicalHistoryController = require('../controllers/medicalHistoryController')

router.get('find', medicalHistoryController.findHistory)
router.post('create', medicalHistoryController.createHistory)
router.put('setEnd', medicalHistoryController.setEnd)