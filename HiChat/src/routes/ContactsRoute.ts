import { Router } from "express";
import { getContacts, postContact } from "../controllers/ContactsController";
import { getMessage, postMessage } from "../controllers/MessageController";

export const contactRouter = Router();

contactRouter.get("/", getContacts);
contactRouter.post("/", postContact);

contactRouter.get("/:contactId/messages/", getMessage);
contactRouter.post("/:contactId/messages/", postMessage);
