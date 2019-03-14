//test.js
const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 9000;

http
  .createServer((req, res) => {
    if (req.url === "/") {
      fs.readFile("index.html", "utf-8", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (req.url === "/test.js") {
      fs.readFile("test.js", "utf-8", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write(data);
        res.end();
      });
    } else if (req.url === "/yellow.js") {
      //延迟 5s
      fs.readFile("yellow.js", "utf-8", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        setTimeout(function() {
          res.write(data);
          res.end();
        }, 5000);
      });
    } else if (req.url === "/blue.js") {
      //延迟 10s
      fs.readFile("blue.js", "utf-8", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        setTimeout(function() {
          res.write(data);
          res.end();
        }, 10000);
      });
    } else if (req.url === "/red.css") {
      //延迟 15s
      fs.readFile("red.css", "utf-8", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/css" });
        setTimeout(function() {
          res.write(data);
          res.end();
        }, 15000);
      });
    } else if (req.url === "/green.css") {
      //延迟 20s
      fs.readFile("green.css", "utf-8", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/css" });
        setTimeout(function() {
          res.write(data);
          res.end();
        }, 20000);
      });
    }
  })
  .listen(port, hostname, () => {
    console.log("Server running at " + hostname);
  });
