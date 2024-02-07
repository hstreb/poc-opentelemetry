const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((_, res) => {
  res.end('Hello from NodeJS!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
