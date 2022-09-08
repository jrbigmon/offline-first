const fileManipulate = require('./fileManipulate')

const orderOnHold = (props) => {
    const { date, geolocation, supervisorId } = props
    
    const newOrder = { 
        date,
        geolocation,
        supervisorId: parseInt(supervisorId)
    }

    const ordersOld = fileManipulate.open()

    ordersOld.push(newOrder)
    
    fileManipulate.store(ordersOld)
   
    const orderAfterStagedAdd = fileManipulate.open()

    return orderAfterStagedAdd
}

module.exports = orderOnHold
