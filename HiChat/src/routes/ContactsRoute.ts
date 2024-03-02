import { Router } from "express";
import { getContacts, postContact } from "../controllers/ContactsController";
import { getMessage, postMessage } from "../controllers/MessageController";

export const contactRouter = Router();

contactRouter.get("/", getContacts);
contactRouter.get("/:contactId/messages/", getMessage);

contactRouter.post("/", postContact);
contactRouter.post("/:contactId/messages/", postMessage);
