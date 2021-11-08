import { sendLog } from "./modules/log.js";

const logger = {
  options: {
    showInConsole: true,
    path: "./logs",
  },
};

logger.done = (message) => sendLog("DONE", message, logger.options);
logger.error = (message) => sendLog("ERROR", message, logger.options);
logger.warn = (message) => sendLog("WARN", message, logger.options);

export default logger;
