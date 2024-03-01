import { Response, Request } from "express";
import { StatusCodes } from "../configuration/HttpStatusConfiguration";

export class MessageController {
  public getMessage(req: Request, res: Response): void {
    res.status(StatusCodes.OK).json({ message: "Ok" });
  }

  public postMessage(req: Request, res: Response): void {
    res.status(StatusCodes.CREATED).json({ message: "Created" });
  }
}
