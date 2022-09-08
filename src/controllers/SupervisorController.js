const { Supervisor } = require('../models')
const bcrypt = require('bcryptjs')

const SupervisorController = {
    createSupervisor: async (req, res) => {
        const { name, email, password } = req.body
        const newSupervisor = {
            name,
            email: email.toLowerCase() || '',
            password: password.trim() ? bcrypt.hashSync(password) : ''
        }
        for (const props in newSupervisor){
            const propsWithoutSpace = newSupervisor[props].trim()
            if(!propsWithoutSpace) return res.json('Has empty fields')
        }
        const verifyIfExists = await Supervisor.findOne({ where: { email } })
        if(verifyIfExists) return res.json('Exists in database')
        Supervisor.create(newSupervisor)
        delete newSupervisor.password
        return res.json({message: 'Success', newSupervisor})
    },

    deleteSupervisor: async (req, res) => {
        const { id } = req.params
        const verifyIfExists = Supervisor.findByPk(id)
        if(!verifyIfExists) return res.json('Not exists in database')
        Supervisor.destroy({ where: { id } })
        return res.json()
    }
}   

module.exports = SupervisorController