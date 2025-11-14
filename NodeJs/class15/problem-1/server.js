const fs = require("fs");
const path = require("path");
// const content = Math.random().toString(36).repeat(10000000);

// fs.writeFileSync(
//   "/Users/kachwaluttamsharma/Desktop/Desktop/BeginnerFullStack-May-2026/NodeJs/class15/problem-1/bigFile.txt",
//   content
// );

// const http = require("http");
// const server = http.createServer();

// server.on("request", (req, res) => {
//   //   console.log("before");
//   //   fs.readFile("./bigFile.txt", (err, data) => {
//   //     if (err) throw err;
//   //     res.end(data);
//   //     console.log("file reading completed");
//   //   });
//   //   console.log("after");
//   const src = fs.createReadStream("./bigFile.txt");
//   src.pipe(res);
// });

// streams
const filepath = path.join(__dirname, "bigFile.txt");
const readableStream = fs.createReadStream(filepath);
const writableStream = fs.createWriteStream("copyOfBigFile.txt");

readableStream.pipe(writableStream);

readableStream.on("error", (err) => {
  console.log("error while reading data : ", err);
});

writableStream.on("error", (err) => {
  console.log("error while writing data : ", err);
});

readableStream.on("data", (chuck) => {
  console.log(`Received ${chuck.length} bytes of data`);
  writableStream.write(chuck);
});

readableStream.on("end", () => {
  writableStream.end();
  console.log("Finished reading file");
});

// server.listen(3000, () => {
//   console.log("server is started at 3000");
// });
