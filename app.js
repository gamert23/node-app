const http = require('http');
const routes = require('./routes');
const express = require('express')

const app = express()

// Middleware
app.use((req, res, next) => {
  console.log("another middleware")
  res.send('<h1> Hello From Express! </h1>')
})

app.listen(3002)

// const server = http.createServer(routes.handler);
// const server = http.createServer(app);

// server.listen(3002)