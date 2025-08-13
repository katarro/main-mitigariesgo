"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MessageCircle, X, RotateCcw, Send } from "lucide-react";

interface ChatMessage {
  role: "user" | "bot";
  message: string;
  timestamp: string;
}

interface ChatState {
  session_id: string;
  username: string;
  company: string;
  role: string;
  step: string;
  history: ChatMessage[];
}

const ChatBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [chatState, setChatState] = useState<ChatState | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const API_URL = "https://tion-long-fluid-dated.trycloudflare.com/bot/onboarding/ask";

  const initializeChat = () => {
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
    initializeChat();
    if (isOpen && chatState) {
        askBot("start_conversation", chatState.session_id);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl flex flex-col w-80 h-96">
          <div className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 text-white p-3 rounded-t-xl">
            <div className="flex items-center space-x-2">
              <Image src="/logo/logo-claro.svg" alt="ZenomyAI Logo" width={24} height={24} />
              <h3 className="text-lg font-bold">Chatbot ZenomyAI</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleNewConversation}
                className="text-white hover:text-blue-200 transition-colors duration-200 p-1 rounded-full hover:bg-white/20"
                aria-label="Nueva conversación"
                title="Iniciar nueva conversación"
              >
                <RotateCcw className="w-6 h-6" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-blue-200 transition-colors duration-200 p-1 rounded-full hover:bg-white/20"
                aria-label="Cerrar chat"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                } animate-fade-in`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white rounded-br-none dark:bg-blue-700"
                      : "bg-gray-200 text-gray-800 rounded-bl-none dark:bg-gray-700 dark:text-white"
                  }`}
                >
                  {msg.message}
                  <p className={`text-xs mt-1 ${msg.role === "user" ? "text-white/80 dark:text-blue-100" : "text-gray-500 dark:text-gray-400"}`}>
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[70%] p-3 rounded-lg bg-gray-200 text-gray-800 animate-pulse rounded-bl-none dark:bg-gray-700 dark:text-white">
                  Escribiendo...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={isLoading ? "Esperando respuesta..." : "Escribe tu mensaje..."}
                className="flex-1 border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-r-lg px-4 py-2 hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-1 dark:bg-blue-700 dark:hover:bg-blue-800"
                disabled={isLoading}
              >
                <span>Enviar</span>
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;