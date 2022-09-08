const SupervisorController = require('./src/controllers/SupervisorController')
const SupervisorCreate = require('./src/entity/Supervisor')
const newSupervisor = SupervisorCreate('FirstName', 'Email', 'Password')
SupervisorController.createSupervisor(newSupervisor)
