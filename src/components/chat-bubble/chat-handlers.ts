import { ChatMessage, ChatState } from "./types";
import { CHATBOT_API_URL } from "../../utils/api-consts";

export const initializeChat = (setChatState: React.Dispatch<React.SetStateAction<ChatState | null>>, setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>): string => {
  const newSessionId = `D${Date.now()}`;
  localStorage.setItem("chat_session_id", newSessionId);
  // No se puede acceder directamente a chatState?.session_id aquí, se necesita pasarlo como argumento si es necesario.
  // Por ahora, se asume que se limpia el historial de la sesión anterior o se maneja externamente.
  // localStorage.removeItem(`chat_history_${chatState?.session_id}`);

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

export const askBot = async (
  question: string,
  sessionId: string,
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>,
  setChatState: React.Dispatch<React.SetStateAction<ChatState | null>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsLoading(true);
  try {
    const response = await fetch(CHATBOT_API_URL, {
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
