import  express  from "express";
import { config } from "dotenv";
config();

const app = express();

// middleware
app.use(express.json()); //incoming and outgoing data will be in json format

export default app;