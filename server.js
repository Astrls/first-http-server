const http = require("http"); // plain Javascript
const fs = require("fs").promises;

const server = http.createServer();

const requestListener = function (req, res) {
  console.log("A request has been submitted");
  fs.readFile(__dirname + "/client/index.html")
  .then((contents) => {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(contents);
  });
};

server.on("request", requestListener);

server.listen(3000, () => {
  console.log("Server started on http://127.0.0.1:3000");
});


