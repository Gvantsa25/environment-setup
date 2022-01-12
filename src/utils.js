import * as logger from "./logger";
export function currentDate() {
  logger.log(`current date is ${new Date()}`);
}