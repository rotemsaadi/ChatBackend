import mongoose, { Schema, Document } from "mongoose";
import { IMessage } from "../types/MessageType";

const messageSchema: Schema = new Schema({
  sender: { type: String, required: true },
  time: { type: Date, required: false, default: Date.now },
  message: { type: String, required: true },
});

export const message = mongoose.model<IMessage>("Message", messageSchema);
