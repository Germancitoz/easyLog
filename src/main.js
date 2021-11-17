import { sendLog } from "./modules/log.js";

const logger = {
  options: {
    showInConsole: true,
    path: "./logs",
    useDate: true,
  },
};

logger.done = (message) => sendLog("DONE", message, logger.options);
logger.error = (message) => sendLog("ERROR", message, logger.options);
logger.warn = (message) => sendLog("WARN", message, logger.options);
logger.debug = (message) => sendLog("DEBUG", message, logger.options);

logger.color = (color, message) => sendLog(color, message, logger.options);

export default logger;
