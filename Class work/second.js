// const pintmsg=require('./first.js');

const { writeSync } = require("fs");

// const data=require('./first.js');
// data.info();
// data.infor();

let fd = fs.openSync("dummy.txt", "w+");
writeSync(fd, "Hello World");
fs.readsync(fd, "utf8");