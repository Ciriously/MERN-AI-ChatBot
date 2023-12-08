import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
config();
const app = express();
// middleware
app.use(express.json()); //incoming and outgoing data will be in json format
app.use(morgan("development")); //logs incoming requests to the console
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map