const url = require('url');
const http = require('http');


http.createServer((req, res) => {

  console.log(req.url); 

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end("<h1><b>Welcome to my website</b></h1>");
  fs.appendFile('log.txt', req.url + '\n', (err) => {
    if (err) throw err;
  });

}).listen(3000);

console.log("Server running on port 3000");