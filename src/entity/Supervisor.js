const SupervisorCreate = (name, email, password) => {
    const supervisor = {
        name,
        email,
        password
    }
    return supervisor
}

module.exports = SupervisorCreate