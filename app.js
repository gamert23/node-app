const http = require('http');
const routes = require('./routes');
const express = require('express')

const app = express()

// Middleware
app.use('/', (req, res, next) => {
  console.log("always run!")
  next()
})

app.use('/add-product', (req, res, next) => {
  console.log("add product page middleware")
  res.send('<form action="/products" method="POST"> <input type="text" /> <button type="submit"> Add Product </button> </form>')
})

app.use('/products', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})

app.use('/', (req, res, next) => {
  console.log("another middleware")
  res.send('<h1> Hello From Express! </h1>')
})

app.listen(3002)

// const server = http.createServer(routes.handler);
// const server = http.createServer(app);

// server.listen(3002)