const path = require('path')

module.exports = {
  port: process.env.PORT || 8082,
  db: {
    database: process.env.DB_NAME || 'musictracker',
    user: process.env.DB_USER || 'musictracker',
    password: process.env.DB_PASS || 'musictracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../musictracker.sqlite')
      // pool: {
      //   max: 5,
      //   min: 0,
      //   acquire: 30000,
      //   idle: 10000
      // }
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}