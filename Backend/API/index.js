import express from "express";
import dotenv from "dotenv";
import { securityAiKey } from "./middleware/security.mjs";
import weatherRouter from "./Routes/weatherRoute.mjs";
import homeRouter from "./Routes/homeRoute.mjs";
import cors from "cors";

dotenv.config();
const app = express(); //Object
const PORT = process.env.PORT || 8080;

//middleware
app.use(securityAiKey);
app.use(cors());

//Routes
app.use("/weather", weatherRouter);
app.use("/", homeRouter);

//Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
