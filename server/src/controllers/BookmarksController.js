const { Bookmark } = require('../models')
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

module.exports = {
  async index (req, res) {
    try {
      const {songId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          Songid: songId
        }
      })
      res.send(bookmark)
    } catch (error) {
      res.status(400).send({
        error: 'Error occurred while trying to fetch the songs'
      })
    }
  }
} 
