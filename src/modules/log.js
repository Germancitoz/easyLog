import { saveFile } from "./file.js";

import COLORS from "../config/colors.js";

export const sendLog = (type, message, options) => {
  const { path, showInConsole, useDate } = options;

  let template = `[${type}] - ${message}`;

  if (useDate) {
    const date = new Date();
    template = `${date.toLocaleDateString()} | ${template}`;
  }

  saveFile(path, type, template);

  if (showInConsole) {
    const color = COLORS[type];
    template = `${color}${date} | [${type}]${COLORS.RESET} - ${message}`;
    console.log(template);
  }
};
