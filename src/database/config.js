require('dotenv').config()
module.exports = {
  "username": env.process.DB_USER,
  "password": env.process.DB_PASS,
  "database": env.process.DB_NAME,
  "host": env.process.DB_HOST,
  "dialect": env.process.DB_DIALECT,
  'port': env.process.DB_PORT
}
