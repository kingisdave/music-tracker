const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

fs
  .readdirSync(__dirname)
  .filter((file) => 
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model
  })

Object.keys(models).forEach(function (modelName) {
  if ('associate' in models[modelName]) {
    console.log('DBDBD DBD: ',models[modelName])
    models[modelName].associate(models)
  }
})
// Object.keys(db).forEach(function (modelName) {
//   console.log(db[modelName], "MODEL")
//   if (db[modelName].options.hasOwnProperty('associate')) {
//       db[modelName].options.associate(db);
//   }
// });

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
