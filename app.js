const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('I am Middleware');
  next();
});

app.use((req, res, next) => {
  console.log('I am More MIDDLEWAREZ!');

  res.send('<h1>Express Fuck YEA!</h1>');
});

const server = http.createServer(app);

server.listen(3000);