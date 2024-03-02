import { Types } from "mongoose";
import { IMessage } from "./MessageType";

export interface IContact extends Document {
  name: string;
  messages: IMessage[];
}
