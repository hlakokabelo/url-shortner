import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { nanoid } from "nanoid";
import connectDB from "./config/dbConfig.js";
import shorthUrlRoute from "./Routes/shortUrl.js";
dotenv.config();
connectDB();
const app = express();

//middleware
app.use(cors({
  origin: "*",
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Welcome to the URL Shortener API");
});

app.use('/api/',shorthUrlRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
