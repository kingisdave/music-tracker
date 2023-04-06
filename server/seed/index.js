const { 
  sequelize,
  User,
  Song,
  Bookmark
} = require('../src/models')
const Promise = require('bluebird')
const users = require('./users.json')
const songs = require('./songs.json')
const bookmarks = require('./bookmarks.json')

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

    await Promise.all(
      bookmarks.map(bookmark => {
        Bookmark.create(bookmark)
      })
    )  
  })