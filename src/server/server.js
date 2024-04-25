import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { indexRouter } from "./routes/indexRouter.js";

dotenv.config();
export const server = express();

server.use(cors());
server.use(express.json());
server.use(indexRouter);