export interface ChatMessage {
  role: "user" | "bot";
  message: string;
  timestamp: string;
}

export interface ChatState {
  session_id: string;
  username: string;
  company: string;
  role: string;
  step: string;
  history: ChatMessage[];
}
