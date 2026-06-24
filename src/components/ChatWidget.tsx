"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "স্বাগতম! আমি বাংলাবাজারের সহায়ক বট। আপনার অর্ডার, পণ্য, ডেলিভারি বা রিটার্ন সংক্রান্ত যেকোনো প্রশ্নে আমি সাহায্য করতে পারি। আজকে আমি কীভাবে আপনাকে সাহায্য করতে পারি?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to get response");

      const assistantMessage: Message = {
        role: "assistant",
        content: data.content[0].text,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "দুঃখিত, আমি এখন উত্তর দিতে পারছি না। অনুগ্রহ করে কিছুক্ষণ পর আবার চেষ্টা করুন।",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="w-[360px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-900 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm">বাংলাবাজার সাপোর্ট</h3>
                <p className="text-slate-400 text-xs">অনলাইন</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4 text-slate-300" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[400px] overflow-y-auto p-4 space-y-3 bg-slate-50">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.role === "user"
                        ? "bg-primary/20"
                        : "bg-slate-200"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <User className="w-3.5 h-3.5 text-primary" />
                    ) : (
                      <Bot className="w-3.5 h-3.5 text-slate-600" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-white rounded-tr-md"
                        : "bg-white text-slate-800 rounded-tl-md shadow-sm border border-slate-100"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2"
                >
                  <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3.5 h-3.5 text-slate-600" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm border border-slate-100">
                    <div className="flex gap-1">
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                        className="w-2 h-2 rounded-full bg-slate-400"
                      />
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1.2, delay: 0.3 }}
                        className="w-2 h-2 rounded-full bg-slate-400"
                      />
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1.2, delay: 0.6 }}
                        className="w-2 h-2 rounded-full bg-slate-400"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={sendMessage} className="p-3 border-t border-slate-200 bg-white">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="লিখুন..."
                  className="flex-1 h-10 px-4 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
