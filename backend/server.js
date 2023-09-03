import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.get("/", () => console.log("Server is running"));

app.listen(port, () => console.log(`Server started on port ${port}`));
