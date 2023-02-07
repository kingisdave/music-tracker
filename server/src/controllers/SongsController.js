const { Song } = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  async index (req, res) {
    try {
      let songs = null
      // const search = 'Wade in the Water.'
      const search = req.query.search
      if(search) {
        songs = await Song.findAll({
          where: {
            [Op.or]: [
              'title','artist','genre','album'
            ].map(key => ({
              [key]: {
                [Op.like]: `%${search}%`
              }
            }))
            // [Op.or]: [
            //   {title: { [Op.like]: '%' + search + '%' }},
            //   {artist: { [Op.like]: '%' + search + '%' }}
            // ]
          }
        })
      } else {
        songs = await Song.findAll({
          limit: 10
        })
      }
      res.send(songs)
    } catch (error) {
      res.status(400).send({
        error: 'Error occurred while trying to fetch the songs'
      })
    }
  },
  async post (req, res) {
    try {
      const songs = await Song.create(req.body)
      res.send(songs)
    } catch (error) {
      res.status(400).send({
        error: 'Error while trying to add a new song'
      })
    }
  },
  async show (req, res) {
    try {
      const song = await Song.findByPk(req.params.songId)
      res.send(song)
    } catch (error) {
      res.status(400).send({
        error: 'Error occurred while trying to fetch the songs'
      })
    }
  },
  async update (req, res) {
    try {
      await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (error) {
      res.status(400).send({
        error: 'Error occurred while updating the songs'
      })
    }
  }
} 
