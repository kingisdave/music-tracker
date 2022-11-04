const { 
  sequelize,
  User,
  Song
} = require('../src/models')
// const config = require('./config/config')
const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./users.json')

sequelize.sync({force: true})
  .then( async function() {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )  
    
    await Promise.all(
      songs.map(song => {
        Song.create(song)
      })
    )  
  })