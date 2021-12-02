import fs from "node:fs";

export const saveFile = (path, type, data) => {
  const date = new Date().toLocaleDateString("en-ZA");
  path = `${path}/${date}`;

  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, {
      recursive: true,
    });
  }

  fs.appendFileSync(`${path}/${type}.log`, `${data}\n`);
};
