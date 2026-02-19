const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    let filePath;

    if (req.url === "/" || req.url === "/home") {
        filePath = path.join(__dirname, "components", "home.html");
    }
    else if (req.url === "/about") {
        filePath = path.join(__dirname, "components", "about.html");
    }
    else if (req.url === "/profile") {
        filePath = path.join(__dirname, "components", "profile.html");
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Page Not Found</h1>");
        return;
    }

    fs.readFile(filePath, (err, data) => {

        if (err) {
            console.log("Error:", err);
            res.writeHead(500);
            res.end("Server Error");
        }
        else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }

    });

});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
