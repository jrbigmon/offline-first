const express = require('express')
const router = express.Router()
const SupervisorController = require('../controllers/SupervisorController')

router.post('/supervisors', SupervisorController.createSupervisor)
router.delete('/supervisors', SupervisorController.deleteSupervisor)

module.exports = router