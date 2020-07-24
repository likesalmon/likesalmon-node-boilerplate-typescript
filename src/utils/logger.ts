/**
 * logger
 */

import { createLogger, format, transports } from "winston";

const logger = createLogger({
  levels: {
    request: 0,
    error: 1,
    warn: 2,
    info: 3,
  },
  level: "info",
  exitOnError: true,
  format: format.combine(format.timestamp(), format.splat(), format.json()),
  transports: [
    new transports.Console({ silent: process.env.NODE_ENV === "test" }),
  ],
});

export default logger;
