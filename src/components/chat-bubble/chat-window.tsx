"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link component
import { X, RotateCcw, Send } from "lucide-react";
import { ChatMessage } from "./types";

interface ChatWindowProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  messages: ChatMessage[];
  inputMessage: string;
  setInputMessage: (message: string) => void;
  handleSendMessage: (e: React.FormEvent) => void;
  handleNewConversation: () => void;
  isLoading: boolean;
  // New prop for quick options
  sendQuickOption: (option: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  setIsOpen,
  messages,
  inputMessage,
  setInputMessage,
  handleSendMessage,
  handleNewConversation,
  isLoading,
  sendQuickOption,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const quickOptions = [
    "¿Qué servicios ofrecen?",
    "Me gustaría probar la plataforma",
    "Cuentame sobre la IA de MitigaRiesgo"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleQuickOptionClick = (option: string) => {
    setInputMessage(option);
    sendQuickOption(option);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl flex flex-col sm:w-[350px] sm:h-[500px] w-full h-full">
      <div className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 text-white p-3 rounded-t-xl">
        <div className="flex items-center space-x-2">
          <Image src="/logo/logo-claro.svg" alt="ZenomyAI Logo" width={150} height={48} />
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

      {/* Quick Options Section */}
      {!isLoading && (
        <div className="p-3 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-2 justify-center">
          {quickOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleQuickOptionClick(option)}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              {option}
            </button>
          ))}
        </div>
      )}

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

      {/* Footer con la marca ZenomyAI */}
      <div className="p-2 text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        Desarrollado por{' '}
        <Link href="https://zenomyai.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
          ZenomyAI
        </Link>
      </div>
    </div>
  );
};

export default ChatWindow;
