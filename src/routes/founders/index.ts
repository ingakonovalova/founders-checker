import { Router } from "express";
import {
  getFounders,
  postCheckFounderExistence,
} from "../../controllers/founders";

const foundersRouter = Router();

foundersRouter.get("/", getFounders);

foundersRouter.post("/checkFounderExistence", postCheckFounderExistence);

export default foundersRouter;
