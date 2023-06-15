import { Router } from "express";
import {
  getFounders,
  postCheckFounderExistence,
  postFounder,
} from "../../controllers/founders";

const foundersRouter = Router();

foundersRouter.get("/", getFounders);

foundersRouter.post("/checkExistence", postCheckFounderExistence);

foundersRouter.post("/", postFounder);

export default foundersRouter;
