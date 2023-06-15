import { ErrorRequestHandler } from "express";
import { ServerError } from "../utils/errors";

export const errorHandler: ErrorRequestHandler = (
  err: ServerError,
  req,
  res,
  next
) => {
  const { message, status } = err;

  res.status(status);
  res.send({ error: message });
};
