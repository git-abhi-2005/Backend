const http = require("http");

http.createServer((req, res) => {

  console.log(req.method, req.url);

  let data = "";
  req.on("data", d => data += d);
  req.on("end", () => {
    if (data) console.log("Data:", data);
  });

  res.end("OK");

}).listen(8000);

console.log("Server chal raha hai");
