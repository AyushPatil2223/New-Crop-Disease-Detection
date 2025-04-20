import React, { useState } from "react";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;
    const newMessage = { sender: "user", text: message };
    setConversation((prev) => [...prev, newMessage]);
    setMessage("");
    setLoading(true);
    
    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      if (data.reply) {
        const botReply = { sender: "bot", text: data.reply };
        setConversation((prev) => [...prev, botReply]);
      } else {
        setConversation((prev) => [...prev, { sender: "bot", text: "❌ No reply received." }]);
      }
    } catch (error) {
      setConversation((prev) => [...prev, { sender: "bot", text: "❌ Error fetching reply." }]);
      console.error("Fetch error:", error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-200 p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">🧠 Chatbot</h2>

        <div className="space-y-4 mb-4 h-96 overflow-y-scroll px-4">
          {conversation.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`p-3 max-w-xs rounded-lg text-white ${
                  msg.sender === "user" ? "bg-blue-500" : "bg-gray-700"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="p-3 max-w-xs rounded-lg bg-gray-700 text-white animate-pulse">...</div>
            </div>
          )}
        </div>

        <textarea
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask something..."
        />
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 transition-colors text-white font-medium py-3 rounded-lg mb-4 disabled:opacity-50"
          onClick={sendMessage}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
