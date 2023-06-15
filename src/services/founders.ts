import { readFoundersFromFile } from "../utils/founders";

export const getFoundersFromFile = () => {
  try {
    return readFoundersFromFile();
  } catch {
    throw new Error("Failed to load founders from file");
  }
};

export const checkIfFounderInFile = (name: string) => {
  const founders = getFoundersFromFile();
  return founders.includes(name);
};
