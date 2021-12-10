const path = require('path')
const express = require('express')
const rootDir = require('../util/path')

router = express.Router()

router.get('/shop', (req, res, next) => {
  res.send('<h1> Hello From Shop! </h1>')
})

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})

module.exports = router