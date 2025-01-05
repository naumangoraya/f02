"use client";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import LogoIcon from "../../images/logo/logo-icon.svg";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
  const GROQ_API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY;

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      // Add user message to chat
      const userMessage = { text: inputMessage, sender: "user" };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInputMessage("");
      setIsLoading(true);

      try {
        // Get response from Groq using llama-3.3-70b-versatile model
        const response = await axios.post(
          GROQ_API_URL,
          {
            model: "llama-3.3-70b-versatile", // Updated model
            messages: [
              {
                role: "system",
                content:
                  "You are a helpful AI assistant that helps in E-commerce business ownwers to solve their problems.",
              },
              {
                role: "user",
                content: inputMessage,
              },
            ],
            temperature: 0.7,
            max_tokens: 4096, // Increased max tokens for longer responses
            top_p: 1,
            stream: false,
          },
          {
            headers: {
              Authorization: `Bearer ${GROQ_API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );

        // Add AI response to chat
        const aiMessage = {
          text:
            response.data.choices[0]?.message?.content ||
            "Sorry, I couldn't process that.",
          sender: "ai",
        };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } catch (error) {
        console.error("Error getting response from Groq:", error);
        // Add error message to chat
        const errorMessage = {
          text: "Sorry, there was an error processing your request.",
          sender: "ai",
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col bg-[#1a222c] rounded-lg overflow-hidden w-74">
      {/* Header - Fixed height */}
      <div className="flex items-center p-3 bg-gray-900 border-b border-gray-700">
        <Image src={LogoIcon} alt="Chatbot Logo" className="h-6 w-6 mr-2" />
        <h1 className="text-lg font-semibold text-white">AI Assistant</h1>
      </div>

      {/* Chat Area - Flexible height with scroll */}
      <div className="flex-1 overflow-y-auto p-4 bg-[#1a222c]">
        <div className="flex flex-col space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-200"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[70%] rounded-lg p-3 bg-gray-700 text-gray-200">
                Thinking...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area - Fixed height */}
      <div className="p-3 bg-gray-900 border-t border-gray-700">
        <form onSubmit={handleSendMessage} className="flex space-x-3">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            disabled={isLoading}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chatbot;
