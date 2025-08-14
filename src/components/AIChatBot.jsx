import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faRobot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const AIChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages([...newMessages, { sender: "ai", text: data.reply }]);
    } catch {
      setMessages([
        ...newMessages,
        { sender: "ai", text: "Error fetching AI response." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[80vh] rounded-md border border-gray-300">
      <div className="bg-gray-500 text-white px-4 py-3 rounded-t-md text-lg font-semibold">
        Ekpass Chatbot
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start space-x-2 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "ai" && (
              <FontAwesomeIcon icon={faRobot} className="text-blue-500 mt-1" />
            )}
            <div
              className={`px-3 py-2 rounded-xl text-sm max-w-xs ${
                msg.sender === "user"
                  ? "bg-green-600 rounded-br-none text-white"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
            {msg.sender === "user" && (
              <FontAwesomeIcon icon={faUser} className="text-gray-500 mt-1" />
            )}
          </div>
        ))}
        {loading && (
          <div className="text-sm text-gray-400 italic">Thinking...</div>
        )}
      </div>
      <div className="p-3 border-t border-gray-300 flex space-x-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-400"
          placeholder="Ask me anything..."
        />
        <button
          onClick={sendMessage}
          className="bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600"
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

export default AIChatBot;
