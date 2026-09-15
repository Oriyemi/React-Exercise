
import React, { useState } from "react";

function ChatApp() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I help you?",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  function handleSendMessage(event) {
    event.preventDefault();

    if (!input.trim() || isSending) {
      return;
    }

    const userMessage = {
      id: crypto.randomUUID(),
      text: input,
      sender: "user",
    };

    // Optimistic update:
    // Show the message immediately
    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage,
    ]);

    setInput("");
    setIsSending(true);

    // Simulate server response
    setTimeout(() => {
      const botMessage = {
        id: crypto.randomUUID(),
        text: "Message received! This is a simulated server response.",
        sender: "bot",
      };

      setMessages((previousMessages) => [
        ...previousMessages,
        botMessage,
      ]);

      setIsSending(false);
    }, 1500);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="flex h-[600px] w-full max-w-2xl flex-col overflow-hidden rounded-xl bg-white shadow-lg">

        {/* HEADER */}
        <div className="bg-blue-600 p-4 text-white">
          <h1 className="text-xl font-bold">
            Chat App
          </h1>

          <p className="text-sm text-blue-100">
            Online
          </p>
        </div>

        {/* MESSAGES */}
        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] rounded-lg px-4 py-3 ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {/* Sending indicator */}
          {isSending && (
            <div className="flex justify-start">
              <div className="rounded-lg bg-gray-200 px-4 py-3 text-gray-500">
                Typing...
              </div>
            </div>
          )}
        </div>

        {/* INPUT */}
        <form
          onSubmit={handleSendMessage}
          className="flex gap-3 border-t p-4"
        >
          <input
            type="text"
            value={input}
            onChange={(event) =>
              setInput(event.target.value)
            }
            placeholder="Type a message..."
            className="flex-1 rounded-lg border p-3 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            disabled={!input.trim() || isSending}
            className="rounded-lg bg-blue-500 px-5 py-3 text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatApp;

