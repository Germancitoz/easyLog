import fs from "node:fs";

export const saveFile = (path, type, data) => {
  const date = new Date();
  path = `${path}/${date.getDay()}-${date.getMonth()}`;

  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, {
      recursive: true,
    });
  }

  fs.appendFileSync(`${path}/${type}.log`, `${data}\n`);
};
