const { Supervisor } = require('../models')
const bcrypt = require('bcryptjs')

const SupervisorController = {
    createSupervisor: async (props) => {
        const { name, email, password } = props
        const newSupervisor = {
            name,
            email: email.toLowerCase() || '',
            password: password.trim() ? bcrypt.hashSync(password) : ''
        }
        for (const props in newSupervisor){
            const propsWithoutSpace = newSupervisor[props].trim()
            if(!propsWithoutSpace) return console.log('Has empty fields')
        }
        const verifyIfExists = await Supervisor.findOne({ where: { email } })
        if(verifyIfExists) return console.log('Exists in database')
        Supervisor.create(newSupervisor)
        delete newSupervisor.password
        return console.log({message: 'Success', newSupervisor})
    }
}   

module.exports = SupervisorController