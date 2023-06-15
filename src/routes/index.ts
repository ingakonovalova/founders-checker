import { Router } from "express";

import foundersRouter from "./founders";

const router = Router()

router.use('/founders', foundersRouter);

export default router;
