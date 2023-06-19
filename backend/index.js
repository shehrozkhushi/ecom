import express, { Router } from "express";
import connectDatabase from "./config/connectDatabase.js";
import router from "./routes/routes.js"

const app = express();

const port = 5000;

connectDatabase();

app.use(express.json());

app.use(router);

app.listen(port,()=>{ 
    console.log(`Server is running on port: http//localhost:${port}`)
})