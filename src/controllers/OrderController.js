const { Order } = require('../models')
const orderOnHold = require('../stagedProcess/orderOnHold')

const OrderController = {
    createOrder: async (req, res) => {
        try {
            const { geolocation, supervisorId } = req.body

            const newOrder = { date: new Date(), geolocation, supervisorId: parseInt(supervisorId) }

            const orderAfterCreate = await Order.create(newOrder)

            return res.json(orderAfterCreate)
        } catch (err) {
            const { geolocation, supervisorId } = req.body
                
            const newOrder = { date: new Date(), geolocation, supervisorId }

            const orderAfterStagedAdd = orderOnHold(newOrder)
                
            return res.json(orderAfterStagedAdd)
        }
    },
    
    getOrders: async (req, res) => {

    }
}

module.exports = OrderController