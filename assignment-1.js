const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method

  if(url === '/') {
    res.setHeader('Content-Type', 'text/html')
  
    res.write('<html>')
    res.write('<head> <title> My First Page </title> </head>')
    res.write('<body> Hello Users')
    res.write('<form action="/create-user" method="POST"> <input type="text" name="message"> <button type="submit"> Send </button> </form>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
  }

  if(url === '/users') {
    res.setHeader('Content-Type', 'text/html')
  
    res.write('<html>')
    res.write('<head> <title> My First Page </title> </head>')
    res.write('<body> <ul> <li> User 1 </li> <ul> </body>')
    res.write('</html>')
    return res.end()
  }

  if(url === '/create-user' && method == 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk)
    })

    req.on('end', (chunk) => {
      const parsedBody = Buffer.concat(body).toString()
      const message = parsedBody.split('=')[1]
      console.log("message", message)
    })

    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
  }
});

server.listen(3002)