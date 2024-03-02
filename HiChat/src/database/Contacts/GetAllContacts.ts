import { ContactModel } from "../../models/ContactSchema";

export const GetAllContacts = async () => {
  try {
    const contacts = await ContactModel.find();
    console.log("Contacts:", contacts);
    return contacts;
  } catch (error) {
    console.error("Error fetching:", error.message);
    throw error;
  }
};
