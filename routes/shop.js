const path = require('path')
const express = require('express')
const rootDir = require('../util/path')
const adminData = require('../routes/admin')

router = express.Router()

router.get('/shop', (req, res, next) => {
  res.send('<h1> Hello From Shop! </h1>')
})

router.get('/', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'))

  const products = adminData.products;
  console.log('shop', products)
  res.render('shop.pug', {
    products: products,
    docTitle: "Shop",
    path: '/'
  })
})

module.exports = router