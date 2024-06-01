import ChatMessage from "./chat_message";

interface Contact {
  userId?: number;
  username: string;
  email?: string;
  roomId?: string;
  chatMessages?: ChatMessage[];
  contactId?: string;
}
export default Contact;
