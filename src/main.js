import { sendLog } from "./modules/log.js";

const logger = {
  options: {
    showInConsole: true,
    path: "./logs",
    useDate: true,
  },
};

logger.done = ({ message }) => sendLog("DONE", "DONE", message, logger.options);

logger.error = ({ message }) =>
  sendLog("ERROR", "ERROR", message, logger.options);

logger.warn = ({ message }) => sendLog("WARN", "WARN", message, logger.options);

logger.debug = ({ message }) =>
  sendLog("DEBUG", "DEBUG", message, logger.options);

logger.color = ({ color, message }) =>
  sendLog(color, color, message, logger.options);

logger.custom = ({ type, color, message }) =>
  sendLog(type, color, message, logger.options);

export default logger;
