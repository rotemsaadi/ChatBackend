import { Response, Request } from "express";
import { StatusCodes } from "../configuration/HttpStatusConfiguration";

export const getMessage = (req: Request, res: Response): void => {
  res.status(StatusCodes.OK).json({ message: "OK" });
};

export const postMessage = (req: Request, res: Response): void => {
  res.status(StatusCodes.CREATED).json({ message: "Created" });
};
