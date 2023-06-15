import {
  readFoundersFromFile,
  writeNameToFoundersFile,
} from "../utils/founders";

export const getFoundersFromFile = () => {
  try {
    return readFoundersFromFile();
  } catch {
    throw new Error("Failed to load founders from file");
  }
};

export const checkIfFounderInFile = (name: string) => {
  //TODO Compare names on same case - lower or upper
  const founders = getFoundersFromFile();
  return founders.includes(name);
};

export const addFounder = (name: string) => {
  try {
    //TODO If first name, don't add blank line in the beginning
    writeNameToFoundersFile(name);

    return readFoundersFromFile();
  } catch {
    throw new Error("Unable to add name to the file");
  }
};
