// ip:port
const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  const jsonData = {
    message: "Hello World",
    date: new Date(),
  };
  const jsonResposne = JSON.stringify(jsonData);
  res.write(jsonResposne);
  res.end();
});

const port = 3000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`server is listening on http://${host}:${port}`);
});

// ip:port
// multiple task

// ip:port:get/post/put/patch/delete:nameofrequest (== event)
