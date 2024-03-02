import { ContactModel } from "../../models/ContactSchema";

export const GetAllContacts = async () => {
  return await ContactModel.find();
};
