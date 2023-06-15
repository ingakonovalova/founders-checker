import fs from "fs";

const FOUNDERS_FILE_PATH = "./founders.txt";

export const readFoundersFromFile = (): string[] => {
  return fs.readFileSync(FOUNDERS_FILE_PATH, "utf8").split("\n");
};

export const writeNameToFoundersFile = (name: string) => {
  fs.appendFileSync(FOUNDERS_FILE_PATH, `\n${name}`);
};
