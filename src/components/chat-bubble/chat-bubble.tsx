"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import ChatWindow from "./chat-window";
import { useChatSession } from "./use-chat-session";
import { ChatMessage } from "./types";

const ChatBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [showTeaser, setShowTeaser] = useState(false);

  const {
    chatState,
    messages,
    setMessages,
    isLoading,
    hasOpenedChat,
    setHasOpenedChat,
    handleInitializeChat,
    askBot,
    handleOpenChat: sessionHandleOpenChat,
  } = useChatSession({ isOpen });

  useEffect(() => {
    if (!isOpen && !hasOpenedChat) {
      const timer = setTimeout(() => {
        setShowTeaser(true);
      }, 3000); // Show after 3 seconds

      return () => clearTimeout(timer);
    } else {
      setShowTeaser(false);
    }
  }, [isOpen, hasOpenedChat]);

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
    const newSessionId = handleInitializeChat();
    if (isOpen) {
        void askBot("start_conversation", newSessionId);
    }
  };

  const openChat = () => {
    setIsOpen(true);
    sessionHandleOpenChat();
  }

  return (
    <div className={`fixed z-50 ${isOpen ? "inset-0 flex items-center justify-center sm:inset-auto sm:bottom-6 sm:right-6" : "bottom-6 right-6"}`}>
      {!isOpen && (
        <>
          {showTeaser && (
            <div className="absolute right-full bottom-0 mr-4 p-3 bg-blue-500 text-white rounded-lg shadow-lg animate-fade-in-left origin-bottom-right">
              <p className="text-sm font-semibold">¡Empieza tu introducción!</p>
            </div>
          )}
          <button
            className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-full p-4 shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 animate-pulse-slow"
            onClick={openChat}
            aria-label="Abrir chat"
          >
            <MessageCircle className="w-8 h-8" />
          </button>
        </>
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
        />
      )}
    </div>
  );
};

export default ChatBubble;
