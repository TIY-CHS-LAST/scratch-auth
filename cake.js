const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('./authMiddleware')
router.route('/').get(ensureAuthenticated, (req, res) => {
  res.status(200).send({ user: req.user })
})
router.route('/:cake').get((req, res) => {
  res.status(200).send({ cake: req.params.cake })
})
module.exports = router
