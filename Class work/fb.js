// const fs = require("fs");
// const fh = fs.openSync("Secfb", "w");
// console.log(fh);
// const x = fs.readFileSync(fh, "utf8");
// console.log(x);

const fs = require("fs");
const fh = fs.openSync("Secfb", "r+");
console.log(fh);
fs.writeFileSync(fh, "HELLO ");
fs.closeSync(fh);
const y = fs.readFileSync("Secfb", "utf8");
console.log(y);
fs.appendFileSync("Secfb", "utf8");
fs.renameSync("Secfb", "Secfb_copy");
fs.cpSync("Secfb_copy", "Secfb_new");
fs.unlinkSync("Secfb_copy");