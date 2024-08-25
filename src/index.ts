import express, { Express, json, Request, Response } from "express";
import dotenv from "dotenv";
import {router} from "./route/route"

dotenv.config();
const app: Express = express();
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');
app.use(express.json())
const port = process.env.PORT || 3000;

app.use(router)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});