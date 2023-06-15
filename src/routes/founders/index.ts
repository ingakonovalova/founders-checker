import { Router } from "express";
import { getFounders, postCheckFounderExistence } from "../../controllers/founders";

const foundersRouter = Router();

foundersRouter.get("/", getFounders);

foundersRouter.post("/check", postCheckFounderExistence);

export default foundersRouter;
