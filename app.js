const http = require('http');
const routes = require('./routes');
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');

const app = express()

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({
  extended: false
}))
// Read file to static
app.use(express.static(path.join(__dirname, 'public')))

// Set filtering paths
app.use('/admin', adminData.routes)
app.use(shopRoutes)

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
  res.status(404).render('404.pug', {
    docTitle: "404"
  })
})

// Middleware
// app.use('/', (req, res, next) => {
//   res.send('<h1> Hello From Express! </h1>')
// })

app.listen(3002)

// const server = http.createServer(routes.handler);
// const server = http.createServer(app);

// server.listen(3002)