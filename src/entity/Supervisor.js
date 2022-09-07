const SupervisorCreate = (props) => {
    const supervisor = {
        name: props.name,
        email: props.email,
        password: props.password
    }
    return supervisor
}

module.exports = SupervisorCreate