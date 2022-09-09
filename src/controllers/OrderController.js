const { Order } = require('../models')
const orderOnHold = require('../stagedProcess/orderOnHold')

const OrderController = {
    createOrder: async (req, res) => {
        try {
            const { geolocation, supervisorId } = req.body

            const newOrder = { date: new Date(), geolocation, supervisorId: parseInt(supervisorId) }

            const orderAfterCreate = await Order.create(newOrder)

            return res.status(201).json(orderAfterCreate)
        } catch (err) {
            const { geolocation, supervisorId } = req.body
                
            const newOrder = { date: new Date(), geolocation, supervisorId }

            const orderAfterStagedAdd = orderOnHold(newOrder)
                
            return res.status(201).json(orderAfterStagedAdd)
        }
    },
    
    getOrders: async (req, res) => {
        try {
            const orders = await Order.findAll({
                include: [
                    {
                        association: 'supervisor',
                        attributes: ['name']
                    }
                ]
            })
            return res.status(200).json(orders)
        } catch (err) {
            console.log(err)
            return res.status(500).json(err)
        }
    }
}

module.exports = OrderController