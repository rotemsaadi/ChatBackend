import mongoose, { Schema, Document } from "mongoose";
import { IContact } from "../types/ContactType";

const contactSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
});

export const ContactModel = mongoose.model<IContact & Document>(
  "Contact",
  contactSchema
);
