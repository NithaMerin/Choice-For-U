import { GoogleGenAI, Chat } from "@google/genai";
import { PRODUCTS } from '../constants';

let chatSession: Chat | null = null;

const initializeChat = () => {
  if (chatSession) return chatSession;
  
  const apiKey = process.env.API_KEY || '';
  // In a real app, handle missing API key gracefully, maybe disable the feature
  if (!apiKey) {
    console.warn("API_KEY is missing. AI features will not work.");
    return null;
  }

  const ai = new GoogleGenAI({ apiKey });

  const productContext = PRODUCTS.map(p => 
    `- ${p.name} (ID: ${p.id}): $${p.price}. ${p.description} Category: ${p.category}.`
  ).join('\n');

  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are a helpful, enthusiastic, and knowledgeable shopping assistant for Lumina Market. 
      Here is our current product catalog:\n${productContext}\n
      
      Rules:
      1. Recommend products based on user needs.
      2. If asked about prices, be accurate based on the catalog.
      3. Keep responses concise and friendly.
      4. If a user asks for something we don't have, politely suggest the closest alternative from our catalog or say we don't carry it.
      5. Do not invent products not in the list.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async function* (message: string) {
  const chat = initializeChat();
  if (!chat) {
    yield "I'm sorry, my connection to the server is currently unavailable (API Key missing).";
    return;
  }

  try {
    const resultStream = await chat.sendMessageStream({ message });
    for await (const chunk of resultStream) {
      // chunk is GenerateContentResponse
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    yield "I'm having a little trouble connecting right now. Please try again later.";
  }
};