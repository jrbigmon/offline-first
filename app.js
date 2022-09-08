const express = require('express')
const app = express()
const port = 3000
const baseUrl = '/api/v1/offline'

const SupervisorRouter = require('./src/router/SupervisorRouter')
const OrderRouter = require('./src/router/OrderRouter')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(baseUrl, SupervisorRouter)
app.use(baseUrl, OrderRouter)

app.listen(port, () => console.log('listening on port ' + port))