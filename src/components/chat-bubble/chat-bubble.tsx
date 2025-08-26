"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { ChatMessage, ChatState } from "./types";
import ChatWindow from "./chat-window";
import { CHATBOT_API_URL } from "../../utils/api-consts";

const ChatBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [chatState, setChatState] = useState<ChatState | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = CHATBOT_API_URL;

  const initializeChat = (): string => {
    const newSessionId = `D${Date.now()}`;
    localStorage.setItem("chat_session_id", newSessionId);
    localStorage.removeItem(`chat_history_${chatState?.session_id}`);

    const initialChatState: ChatState = {
      session_id: newSessionId,
      username: "",
      company: "",
      role: "",
      step: "initial",
      history: [],
    };
    setChatState(initialChatState);
    setMessages([]);
    return newSessionId;
  };

  useEffect(() => {
    let currentSessionId = localStorage.getItem("chat_session_id");
    if (!currentSessionId) {
      initializeChat();
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

  }, [isOpen]);

  useEffect(() => {
    if (chatState?.session_id && messages.length > 0) {
      localStorage.setItem(`chat_history_${chatState.session_id}`, JSON.stringify(messages));
    }
  }, [messages, chatState?.session_id]);

  const askBot = async (question: string, sessionId: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          session_id: sessionId,
          question: question,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);

      const botMessage: ChatMessage = {
        role: "bot",
        message: data.response || "Lo siento, no pude obtener una respuesta.",
        timestamp: new Date().toISOString(),
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);

      setChatState((prevState) => {
        if (!prevState) return null;
        return {
          ...prevState,
          username: data.username || prevState.username,
          company: data.company || prevState.company,
          role: data.role || prevState.role,
          step: data.step || prevState.step,
          history: data.history || prevState.history,
        };
      });
    } catch (error) {
      console.error("Error al comunicarse con el bot:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "bot", message: "Ha ocurrido un error al intentar comunicarme. Por favor, inténtalo de nuevo.", timestamp: new Date().toISOString() },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() === "" || !chatState || isLoading) return;

    const newUserMessage: ChatMessage = {
      role: "user",
      message: inputMessage,
      timestamp: new Date().toISOString(),
    };

    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInputMessage("");

    await askBot(newUserMessage.message, chatState.session_id);
  };

  const handleNewConversation = () => {
    const newSessionId = initializeChat();
    if (isOpen) {
        askBot("start_conversation", newSessionId);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-full p-4 shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 animate-pulse-slow"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir chat"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      )}

      {isOpen && (
        <ChatWindow
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          messages={messages}
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
          handleNewConversation={handleNewConversation}
          isLoading={isLoading}
          API_URL={API_URL}
        />
      )}
    </div>
  );
};

export default ChatBubble;
