import { saveFile } from "./file.js";

import STYLE from "../config/style.js";

export const sendLog = (type, message, options) => {
  const { path, showInConsole, useDate } = options;

  let date = "";
  let template = `[${type}] - ${message}`;

  if (useDate) {
    date = new Date().toLocaleDateString();
    template = `${date} | ${template}`;
  }

  saveFile(path, type, template);

  if (showInConsole) {
    const color = STYLE[type];
    template = `${color}${date} | [${type}]${STYLE.RESET} - ${message}`;
    console.log(template);
  }
};
