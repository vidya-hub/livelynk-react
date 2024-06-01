interface ChatMessage {
  messageId: string;
  timeSent: Date;
  from: number;
  to: number;
  message: string;
}
export default ChatMessage;
