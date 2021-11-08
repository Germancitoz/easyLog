import { saveFile } from "./file.js";

import COLORS from "../config/colors.js";

export const sendLog = (type, message, options) => {
  const { path, showInConsole } = options;

  let template = `[${type}] - ${message}`;

  saveFile(path, type, template);

  if (showInConsole) {
    const color = COLORS[type];
    template = `${color}[${type}]${COLORS.RESET} - ${message}`;
    console.log(template);
  }
};
