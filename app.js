const SupervisorController = require('./src/controllers/SupervisorController')
const SupervisorCreate = require('./src/entity/Supervisor')
const vagnerSupervisor = require('./src/toUse/vagner')
SupervisorController.createSupervisor(SupervisorCreate(vagnerSupervisor))
