import { IMessage } from "../../types/MessageType";
import { ContactModel } from "../../models/ContactSchema";
import { MessageModel } from "../../models/MessageSchema";

export const InsertMessageForContact = async (
  contactId: string,
  newMessage: IMessage
) => {
  const contactUser = await ContactModel.findById(contactId);
  const messageModel = new MessageModel(newMessage);
  await messageModel.save();

  contactUser.messages.push(messageModel);
  await contactUser.save();

  return messageModel;
};
