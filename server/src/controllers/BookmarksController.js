const { Bookmark } = require('../models')
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

module.exports = {
  async index (req, res) {
    try {
      const {songId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId
        }
      })
      res.send(bookmark)
    } catch (error) {
      res.status(400).send({
        error: 'Error occurred while trying to fetch the bookmarks'
      })
    }
  },
  async post (req, res) {
    try {
      const bookmark = req.body
      await Bookmark.create(bookmark)
      res.send(bookmark)
    } catch (error) {
      res.status(400).send({
        error: 'Error occurred while trying to bookmark a song'
      })
    }
  },
  async delete (req, res) {
    try {
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.destroy({
        where: {
          id: bookmarkId 
        }
      });
      res.send(bookmark)
    } catch (error) {
      res.status(400).send({
        error: 'Error occurred while delete the song bookmark'
      })
    }
  }
} 
