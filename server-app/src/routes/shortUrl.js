import express from "express";
import { createUrl, deleteUrl, getAllUrl, getUrl } from "../Controllers/shortUrl.js";

const router = express.Router();

router.post("/shortenUrl",createUrl)
router.get("/shortenUrl",getAllUrl)
router.get("/shortenUrl/:id",getUrl)
router.delete("/shortenUrl/:id",deleteUrl)


export default router;