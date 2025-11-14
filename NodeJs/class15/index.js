// console.log(global);
//console.log("dir name: ", __dirname, "file name: ", __filename);
// console.log(process);
// console.log(...process.moduleLoadList);
// console.log(process.pid);
// console.log(process.argv);

const os = require("os");

console.log("arch:", os.arch());
console.log("cpus:", os.cpus());
console.log("freemem:", os.freemem());
console.log("platform:", os.platform());
console.log("release:", os.release());
console.log(os.networkInterfaces());
