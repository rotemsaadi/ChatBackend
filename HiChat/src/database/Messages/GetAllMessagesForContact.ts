import { ContactModel } from "../../models/ContactSchema";
import { MessageModel } from "../../models/MessageSchema";

export const GetAllMessagesForContact = async (contactId: string) => {
  const contact = await ContactModel.findById(contactId);
  return await MessageModel.find({
    _id: { $in: contact.messages },
  });
};
