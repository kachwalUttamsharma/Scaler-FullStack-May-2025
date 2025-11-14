console.log("start");

setTimeout(() => console.log("timer"), 0);

setImmediate(() => console.log("immediate"));

process.nextTick(() => console.log("nextTick"));

Promise.resolve().then(() => console.log("promise"));

console.log("end");
