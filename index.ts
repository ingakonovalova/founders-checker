import express, { Express } from "express";
import dotenv from "dotenv";
import router from "./src/routes";
import { errorHandler } from "./src/middlewares/errorHandler";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
