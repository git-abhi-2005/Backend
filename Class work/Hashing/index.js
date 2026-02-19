// const crypto = require("crypto");
// const BeforeExe = Date.now();
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// console.log(Date.now() - BeforeExe);

// const crypto = require("crypto");
// const BeforeExe = Date.now();
// let count = 0;
// for (let i = 0; i < 100; i++) {
//   crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//     count++;
//     if (count === 100) {
//       console.log("Time:", Date.now() - BeforeExe, "ms");
//     }
//   });
// }

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const eventHandler = () => {
  console.log("Start Making Pizza");
};
eventEmitter.on("order-pizza", eventHandler);
eventEmitter.on("order-pizza", () => {
  console.log("Pizza order received");
});
eventEmitter.emit("order-pizza");
