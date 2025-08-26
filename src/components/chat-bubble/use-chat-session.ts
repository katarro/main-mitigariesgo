import { useState, useEffect } from "react";
import { ChatMessage, ChatState } from "./types";
import { initializeChat, askBot as importedAskBot } from "./chat-handlers";

interface UseChatSessionProps {
  isOpen: boolean;
}

interface UseChatSessionReturn {
  chatState: ChatState | null;
  setChatState: React.Dispatch<React.SetStateAction<ChatState | null>>;
  messages: ChatMessage[];
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  hasOpenedChat: boolean;
  setHasOpenedChat: React.Dispatch<React.SetStateAction<boolean>>;
  handleInitializeChat: () => string;
  askBot: (question: string, sessionId: string) => Promise<void>;
  handleOpenChat: () => void;
}

export const useChatSession = ({ isOpen }: UseChatSessionProps): UseChatSessionReturn => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [chatState, setChatState] = useState<ChatState | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasOpenedChat, setHasOpenedChat] = useState(false);

  const handleInitializeChat = (): string => {
    const newSessionId = initializeChat(setChatState, setMessages);
    localStorage.removeItem(`chat_history_${chatState?.session_id}`);
    return newSessionId;
  };

  const askBot = async (question: string, sessionId: string) => {
    await importedAskBot(question, sessionId, setMessages, setChatState, setIsLoading);
  };

  const handleOpenChat = () => {
    setHasOpenedChat(true); // Set true when chat is opened
    localStorage.setItem("has_opened_chat", JSON.stringify(true));
  }

  useEffect(() => {
    const storedHasOpenedChat = localStorage.getItem("has_opened_chat");
    if (storedHasOpenedChat) {
      setHasOpenedChat(JSON.parse(storedHasOpenedChat));
    }

    let currentSessionId = localStorage.getItem("chat_session_id");
    if (!currentSessionId) {
      handleInitializeChat();
      return;
    }

    const initialChatState: ChatState = {
      session_id: currentSessionId,
      username: "",
      company: "",
      role: "",
      step: "initial",
      history: [],
    };
    setChatState(initialChatState);

    const storedMessages = localStorage.getItem(`chat_history_${currentSessionId}`);
    if (storedMessages) {
      const parsedMessages = JSON.parse(storedMessages);
      setMessages(parsedMessages);
    } else if (isOpen) {
        askBot("start_conversation", initialChatState.session_id);
    }
  }, [isOpen]); // Depend on isOpen to trigger initial bot message if chat is opened

  useEffect(() => {
    if (chatState?.session_id && messages.length > 0) {
      localStorage.setItem(`chat_history_${chatState.session_id}`, JSON.stringify(messages));
    }
  }, [messages, chatState?.session_id]);

  return {
    chatState,
    setChatState,
    messages,
    setMessages,
    isLoading,
    setIsLoading,
    hasOpenedChat,
    setHasOpenedChat,
    handleInitializeChat,
    askBot,
    handleOpenChat,
  };
};
