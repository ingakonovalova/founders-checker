import fs from "fs";

export const readFoundersFromFile = (): string[] => {
  return fs.readFileSync("./founders.txt", "utf8").split("\n");
};
