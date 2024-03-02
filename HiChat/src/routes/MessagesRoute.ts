import { Router } from "express";
import { getMessage, postMessage } from "../controllers/MessageController";

export const messagesRouter = Router();

messagesRouter.get(":contactId/", getMessage);
messagesRouter.post(":contactId/", postMessage);
