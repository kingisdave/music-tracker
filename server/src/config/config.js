module.exports = {
  port: process.env.PORT || 8082,
  db: {
    database: process.env.DB_NAME || 'musictracker',
    user: process.env.DB_USER || 'musictracker',
    password: process.env.DB_PASS || 'musictracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './musictracker.sqlite'
    }
  }
}