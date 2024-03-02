export interface IMessage extends Document {
  sender: string;
  time: Date;
  message: string;
}
