import { Response, Request } from "express";
import { StatusCodes } from "../configuration/HttpStatusConfiguration";
import { GetAllContacts } from "../database/Contacts/GetAllContacts";
import { InsertContact } from "../database/Contacts/CreateNewContact";

export const getContacts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const contacts = await GetAllContacts();
  res.status(StatusCodes.OK).json({ contacts: contacts });
};

export const postContact = (req: Request, res: Response): void => {
  InsertContact(req.body);
  res.status(StatusCodes.CREATED).json({ contact: req.body });
};
