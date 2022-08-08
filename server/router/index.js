const express = require('express'),
     router = new express() ,
     userRouter = require('./userRouter'),
     //illnessRouter = require('./illnessRouter'),
     doctorRouter = require('./doctorRouter');
    // medicalHistoryRouter = require('./medicalHistoryRouter');

router.use('/user', userRouter)
// router.use('/illness', illnessRouter)
router.use('/doctor', doctorRouter)
// router.use('/mhistory', medicalHistoryRouter)

module.exports = router