/**
 *
 *
 * index
 *
 *
 */
import logger from "./utils/logger";

const main = () => {
  logger.info("It works!", {
    works: true,
  });
};

main();

export default main;
