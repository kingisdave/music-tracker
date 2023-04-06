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
  // {
  //   host: config.db.HOST,
  //   dialect: config.db.dialect
    // operatorsAliases: false,
    // pool: {
    //   max: config.pool.max,
    //   min: config.pool.min,
    //   acquire: config.pool.acquire,
    //   idle: config.pool.idle,
    // }
  // }
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

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
// Object.keys(models).forEach(function (modelName) {
//   console.log('DBDBD DBD: ',models[modelName])
//   if ('associate' in models[modelName]) {
//     models[modelName].associate(models)
//   }
// })
// Object.keys(db).forEach(function (modelName) {
//   console.log(db[modelName], "MODEL")
//   if (db[modelName].options.hasOwnProperty('associate')) {
//       db[modelName].options.associate(db);
//   }
// });

db.sequelize = sequelize
db.Sequelize = Sequelize

console.log(db)

module.exports = db
