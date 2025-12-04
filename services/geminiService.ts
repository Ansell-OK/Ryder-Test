import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// Assumption: process.env.API_KEY is available in the build environment.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const getGeminiResponse = async (
  prompt: string, 
  history: { role: string; parts: { text: string }[] }[] = []
): Promise<string> => {
  if (!apiKey) {
    return "Demo mode: API Key not found. Please configure process.env.API_KEY to interact with the real AI.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are Ryder AI, a helpful and knowledgeable assistant for the Ryder hardware wallet. 
        Ryder is a "social wallet" that replaces seed phrases with "TapSafe Recovery" using social guardians.
        Tone: Professional, Trustworthy, High-Tech, sleek, and concise. 
        Goal: Explain Web3 concepts simply and promote Ryder's security features.
        Do not provide financial advice. Focus on security and technology.`,
        temperature: 0.7,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message: prompt });
    return result.text || "I'm processing that information, but couldn't generate a text response right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a temporary glitch in the matrix. Please try asking again.";
  }
};