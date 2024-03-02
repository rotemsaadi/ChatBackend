import { message } from "../models/MessageSchema";
import { IMessage } from "../types/MessageType";

export const InsertMessage = async (newMessage: IMessage) => {
  const messageModel = new message(newMessage);

  try {
    const savedMessage = await messageModel.save();
    console.log("Message saved successfully:", savedMessage);
    return savedMessage;
  } catch (error) {
    console.error("Error saving message:", error);
    throw error;
  }
};
