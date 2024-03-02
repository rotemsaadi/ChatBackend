import { IMessage } from "../../types/MessageType";
import { ContactModel } from "../../models/ContactSchema";
import { MessageModel } from "../../models/MessageSchema";

export const InsertMessageForContact = async (
  contactId: string,
  newMessage: IMessage
) => {
  try {
    const contactUser = await ContactModel.findById(contactId);
    if (!contactUser) throw new Error("Contact not found");

    const messageModel = new MessageModel(newMessage);
    await messageModel.save();

    contactUser.messages.push(messageModel);
    await contactUser.save();

    console.log("Message saved successfully:", messageModel);
    return messageModel;
  } catch (error) {
    console.error("Error saving message:", error);
    throw error;
  }
};
