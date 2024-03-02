import { IContact } from "../../types/ContactType";
import { ContactModel } from "../../models/ContactSchema";

export const InsertContact = async (newContact: IContact) => {
  const contactModel = new ContactModel(newContact);
  return await contactModel.save();
};
