import { message } from "../models/MessageSchema";

export const GetAllMessages = async () => {
  try {
    const messages = await message.find();
    console.log("All messages:", messages);
    return messages;
  } catch (error) {
    console.error("Error fetching:", error.message);
    throw error;
  }
};
