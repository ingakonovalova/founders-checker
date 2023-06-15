import { ServerError } from "./../utils/errors";
import { RequestHandler } from "express";
import {
  checkIfFounderInFile,
  getFoundersFromFile,
} from "../services/founders";

export const getFounders: RequestHandler<{}, { founders: string[] }> = (
  req,
  res
) => {
  try {
    const founders = getFoundersFromFile();

    res.status(200);
    res.send({ founders: founders });
  } catch (error) {
    throw new ServerError((error as Error).message, 500);
  }
};

export const postCheckFounderExistence: RequestHandler<
  {},
  { isFounder: boolean },
  { name: string }
> = (req, res) => {
  try {
    if (!req.body.name) {
      throw new ServerError("Missing name", 400);
    }

    res.status(200);
    res.send({
      isFounder: checkIfFounderInFile(req.body.name),
    });
  } catch (error) {
    if (error instanceof ServerError) {
      throw error;
    }
    throw new ServerError((error as Error).message, 500);
  }
};
