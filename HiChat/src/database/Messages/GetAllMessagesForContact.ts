import { ContactModel } from "../../models/ContactSchema";
import { MessageModel } from "../../models/MessageSchema";

export const GetAllMessagesForContact = async (contactId: string) => {
  try {
    const contact = await ContactModel.findById(contactId);
    if (!contact) {
      throw new Error("Contact not found");
    }

    const messages = await MessageModel.find({
      _id: { $in: contact.messages },
    });

    console.log("All messages:", messages);
    return messages;
  } catch (error) {
    console.error("Error fetching:", error.message);
    throw error;
  }
};
