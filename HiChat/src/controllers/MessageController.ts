import { Response, Request } from "express";
import { StatusCodes } from "../configuration/HttpStatusConfiguration";
import { GetAllMessagesForContact } from "../database/Messages/GetAllMessagesForContact";
import { InsertMessageForContact } from "../database/Messages/InsertMessageForContact";

export const getMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  const messages = await GetAllMessagesForContact(req.params.contactId);
  res.status(StatusCodes.OK).json({ message: messages });
};

export const postMessage = (req: Request, res: Response): void => {
  InsertMessageForContact(req.params.contactId, req.body);
  res.status(StatusCodes.CREATED).json({ message: req.body });
};
