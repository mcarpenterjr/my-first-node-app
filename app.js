const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Get DATA bitch</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Get DATA bitch</title></head>');
  res.write('<body><form><input type="text"><button type="submit"></button></form></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);