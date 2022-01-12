// const a = 3 ?? 5;

// const obj = {
//   a: {
//     b: {
//       c: 12,
//     }
//   }
// }
// if (obj.a && obj.a.b && obj.a.b.c) {
//   console.log(obj.a.b.c);
// }
// console.log(obj?.a?.b?.c);
import * as logger from "./logger";
import * as utils from "./utils";
logger.log("my message");
utils.currentDate();