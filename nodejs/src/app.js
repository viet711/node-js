import express from "express";
import productRouter from "./router/product.js";
import authRouter from "./router/auth.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
const URL_DB = process.env.URL_DB;
app.use(express.json());
app.use(cors());

app.use("/api", productRouter);
app.use("/api", authRouter);

mongoose.connect(URL_DB);
export const viteNodeApp = app;