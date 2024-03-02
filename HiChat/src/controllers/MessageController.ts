import { Response, Request } from "express";
import { StatusCodes } from "../configuration/HttpStatusConfiguration";
import { GetAllMessages } from "../database/GetAllMessages";
import { InsertMessage } from "../database/InsertMessage";

export const getMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  const messages = await GetAllMessages();
  console.log(messages);
  res.status(StatusCodes.OK).json({ message: messages });
};

export const postMessage = (req: Request, res: Response): void => {
  InsertMessage(req.body);
  res.status(StatusCodes.CREATED).json({ message: req.body });
};
