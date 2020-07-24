/**
 *
 * my-module
 *
 */
import { T } from "ramda";
import logger from "./utils/logger";

const main = (): boolean => {
  logger.info("This is my-module.", { moduleName: "my-module" });
  return T();
};

export default main;
