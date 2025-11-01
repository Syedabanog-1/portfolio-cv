"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiSend, FiX, FiMessageSquare } from "react-icons/fi";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, open]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || sending) return;
    setSending(true);
    setMessages((prev) => [
      ...prev,
      { role: "user", content: text },
      { role: "assistant", content: "" },
    ]);
    setInput("");

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!res.body) {
        const fallback = await res.text();
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: "assistant", content: fallback };
          return copy;
        });
      } else {
        const reader = res.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let assistantText = "";
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          assistantText += decoder.decode(value, { stream: true });
          setMessages((prev) => {
            const copy = [...prev];
            copy[copy.length - 1] = { role: "assistant", content: assistantText };
            return copy;
          });
        }
      }
    } catch {
      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = {
          role: "assistant",
          content: "⚠️ Sorry, something went wrong. Please try again.",
        };
        return copy;
      });
    } finally {
      setSending(false);
    }
  }, [input, sending]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating launcher */}
      <button
        aria-label="Open chat assistant"
        onClick={() => setOpen((v) => !v)}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center 
          h-14 w-14 rounded-full shadow-lg transition-all duration-300 
          ${open ? "bg-gradient-to-r from-teal-500 to-blue-600" : "bg-gradient-to-r from-blue-600 to-teal-500"}
          text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]`}
      >
        {open ? <FiX className="text-2xl" /> : <FiMessageSquare className="text-2xl" />}
      </button>

      {/* Chat Panel */}
      {open && (
        <div
          className="fixed bottom-24 right-4 z-50 w-[95vw] sm:w-[400px] md:w-[420px] 
          h-[70vh] sm:h-[520px] backdrop-blur-lg bg-gray-900/90 border border-gray-700 
          text-gray-100 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold">
            <span>Portfolio Assistant</span>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="hover:text-gray-200">
              <FiX />
            </button>
          </div>

          {/* Messages */}
          <div ref={containerRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 mt-10">
                👋 Hi there! Ask me anything about <br /> <span className="text-blue-400 font-semibold">skills, projects, or contact info.</span>
              </div>
            )}

            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl text-sm sm:text-base max-w-[80%] ${
                    m.role === "user"
                      ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white"
                      : "bg-gray-800 text-gray-100 border border-gray-700"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-700 flex gap-2 bg-gray-800/80">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type your message..."
              className="flex-1 bg-gray-900 border border-gray-700 rounded-md px-3 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={sendMessage}
              disabled={sending}
              className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-teal-500 hover:to-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center transition-all duration-300 disabled:opacity-50"
            >
              {sending ? (
                <span className="animate-pulse">...</span>
              ) : (
                <FiSend className="text-lg" />
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
