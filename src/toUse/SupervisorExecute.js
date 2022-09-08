const SupervisorController = require('../controllers/SupervisorController')
const SupervisorCreate = require('../entity/Supervisor')
const newSupervisor = SupervisorCreate('FirstName', 'Email', 'Password')
SupervisorController.createSupervisor(newSupervisor)
