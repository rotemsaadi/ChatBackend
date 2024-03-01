import { Router } from "express";
import { getMessage, postMessage } from "../controllers/MessageController";

export const router = Router();

router.get("/", getMessage);
router.post("/", postMessage);
