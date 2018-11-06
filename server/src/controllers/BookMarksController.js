const { BookMark } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const { songId, userId } = req.query
      console.log(req.query)
      console.log(songId, userId)
      const bookmark = await BookMark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      console.log(bookmark)
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An Error occured while getting bookmark'
      })
    }
  }
}
