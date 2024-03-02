import { IContact } from "../../types/ContactType";
import { ContactModel } from "../../models/ContactSchema";

export const InsertContact = async (newContact: IContact) => {
  const contactModel = new ContactModel(newContact);

  try {
    const savedContact = await contactModel.save();
    console.log("Contact saved successfully:", savedContact);
    return savedContact;
  } catch (error) {
    console.error("Error saving message:", error);
    throw error;
  }
};
