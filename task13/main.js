const myHttp = require("http");
const myFile = require("fs");

const myServer = myHttp.createServer(function (req, response) {
  if (req.url === "/home" || req.url === "/") {
    response.writeHead(200, { "Content-type": "text/html" });
    myFile.readFile("index.html", function (err, data) {
      if (err) {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end("404 Not Found");
      }

      response.write(data);
      response.end();
    });
  } else if (req.url === "/about") {
    myFile.readFile("about.html", function (err, data) {
      if (err) {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end("404 Not Found");
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    });
  } else if (req.url === "/contact") {
    myFile.readFile("contact.html", function (err, data) {
      if (err) {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end("404 not found!!!");
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    });
  } else if (req.url === "/styles.css") {
    myFile.readFile("styles.css", function (err, data) {
      if (err) {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end("404 Not Found");
      }

      response.writeHead(200, { "Content-Type": "text/css" });
      response.write(data);
      response.end();
    });
  } else {
    myFile.readFile("notFound.html", function (err, data) {
      if (err) {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end("404 not found!!!");
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    });
  }
});

myServer.listen(3011, () => {
  console.log("server is ready");
});
