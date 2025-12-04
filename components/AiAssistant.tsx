import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AiAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hello. I'm Ryder AI. I can explain how our TapSafe recovery works or answer questions about Web3 security. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
        // Construct history for the API
        const history = messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
        }));

        const responseText = await getGeminiResponse(userMessage.text, history);

        const botMessage: ChatMessage = {
            id: (Date.now() + 1).toString(),
            role: 'model',
            text: responseText,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
    } catch (error) {
        console.error(error);
    } finally {
        setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ai-assistant" className="relative py-24 px-6 overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-accent/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-accent/10 rounded-full blur-[120px] -z-10" />

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-accent/10 border border-primary-accent/20 text-primary-accent text-sm font-medium mb-6">
                    <Sparkles size={16} />
                    <span>Powered by Gemini 2.5</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Your Personal <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-secondary-accent">Crypto Guardian</span>
                </h2>
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                    Not sure what "Social Recovery" means? Worried about transaction signing? 
                    Ryder AI is built directly into the experience to guide you through the complexities of Web3 with confidence.
                </p>
                
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-background-card border border-border-subtle">
                        <div className="w-10 h-10 rounded-full bg-primary-accent/20 flex items-center justify-center text-primary-accent">
                            <Bot size={20} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-white">24/7 Intelligent Support</h4>
                            <p className="text-sm text-text-secondary">Get instant answers about your wallet security.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Chat Interface Mockup */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
            >
                <div className="w-full max-w-md mx-auto bg-background-cardHighlight/60 backdrop-blur-xl border border-border-subtle rounded-2xl shadow-card-elevation overflow-hidden flex flex-col h-[500px]">
                    {/* Header */}
                    <div className="p-4 border-b border-border-subtle bg-background-secondary/50 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="font-semibold text-sm tracking-wide">Ryder Assistant</span>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                                    msg.role === 'user' 
                                        ? 'bg-primary-accent text-white rounded-br-none' 
                                        : 'bg-background-card border border-border-subtle text-text-secondary rounded-bl-none'
                                }`}>
                                    {msg.text}
                                </div>
                            </motion.div>
                        ))}
                        {isLoading && (
                             <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex justify-start"
                             >
                                <div className="bg-background-card border border-border-subtle p-3 rounded-2xl rounded-bl-none">
                                    <Loader2 className="w-4 h-4 animate-spin text-primary-accent" />
                                </div>
                             </motion.div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-background-secondary/50 border-t border-border-subtle">
                        <div className="relative">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask about TapSafe..."
                                className="w-full bg-background-main border border-border-subtle rounded-full py-3 pl-4 pr-12 text-sm text-white placeholder-text-secondary focus:outline-none focus:border-primary-accent/50 transition-colors"
                            />
                            <button 
                                onClick={handleSend}
                                disabled={isLoading || !input.trim()}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-primary-accent rounded-full text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
                            >
                                <Send size={14} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements behind chat */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-primary-accent to-purple-600 rounded-full blur-2xl opacity-40 -z-10 animate-pulse" />
            </motion.div>
        </div>
    </section>
  );
};