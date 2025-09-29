// common js
const fs = require("fs");

// fs.readFile("./example.txt", (err, data) => {
//   if (err) {
//     console.log("error: ", err);
//     return;
//   }
//   console.log(data.toString());
// });

// const content = "This the content of example1.txt";

// fs.writeFile("./example.txt", content, (err) => {
//   if (err) {
//     console.log("error: ", err);
//     return;
//   }
//   console.log("File has been written");
// });

// fs.rename("./example.txt", "./newFile.txt", (err) => {
//   if (err) {
//     console.log("error: ", err);
//     return;
//   }
//   console.log("File name has been changed");
// });

// fs.unlink("./newFile.txt", (err) => {
//   if (err) {
//     console.log("error: ", err);
//     return;
//   }
//   console.log("File has been deleted");
// });

// fs.appendFile("./example1.txt", " new content added", (err) => {
//   if (err) {
//     console.log("error: ", err);
//     return;
//   }
//   console.log("File has been updated");
// });

// CRUD: create, read, update, delete

// fs.stat("./example1.txt", (err, stats) => {
//   if (err) {
//     console.log("error: ", err);
//     return;
//   }
//   console.log(stats);
// });

const directoryName = "./my-directory";

// fs.mkdir(directoryName, (err) => {
//   if (err) {
//     console.log("error: ", err);
//     return;
//   }
//   console.log("Directory has been created");
// });

// fs.rmdir(directoryName, (err) => {
//   if (err) {
//     console.log("error: ", err);
//     return;
//   }
//   console.log("Directory has been deleted");
// });

//sync
// if (fs.existsSync(directoryName)) {
//   console.log("file exists ", directoryName);
// } else {
//   console.log("file doesnt exists ", directoryName);
// }

// async
// fs.access(directoryName, fs.constants.F_OK, (err) => {
//   if (err) {
//     console.log("error: ", err);
//     return;
//   }
//   console.log("File Exists");
// });

// Paths

// const path = require("path");

// const filename = path.basename("/path/to/the/file.txt");
// console.log(filename);
// const dirName = path.dirname("/path/to/the/file.txt");
// console.log(dirName);
// const extension = path.extname("/path/to/the/file.txt");
// console.log(extension);

// const pathInfo = path.parse("./path/to/file.txt");
// console.log(pathInfo);

// const isAbsolute = path.isAbsolute("/path/to/file.txt");
// console.log(isAbsolute);

// problem we have copy data from source file to destination file

// fs.readFile("./common/sourceFile.txt", (err, data) => {
//   if (err) {
//     console.log("error: ", err);
//     return;
//   }
//   fs.writeFile("./common/destinationFile.txt", data.toString(), (err) => {
//     if (err) {
//       console.log("error: ", err);
//       return;
//     }
//     console.log("File has been written");
//   });
// });

const readStream = fs.createReadStream("./common/sourceFile.txt");
const writeStream = fs.createWriteStream("./common/destinationFile.txt");

readStream.pipe(writeStream);

readStream.on("error", (err) => {
  console.log("error occured while reading stream", err);
});

writeStream.on("error", (err) => {
  console.log("error occured while writing stream", err);
});

writeStream.on("finish", () => {
  console.log("file copied successfully");
});
