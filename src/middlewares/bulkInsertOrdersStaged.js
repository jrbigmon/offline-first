const { Order } = require('../models')
const fileManipulate = require('../stagedProcess/fileManipulate')

const bulkInsertOrdersStaged = async (req, res, next) => {
   try {
          const ordersStaged = fileManipulate.open()
          if(ordersStaged.length > 0){
               await Order.bulkCreate(ordersStaged)
          }
          fileManipulate.store([])
          return next()
   } catch (err) {
          return next()
   }
}
module.exports = bulkInsertOrdersStaged