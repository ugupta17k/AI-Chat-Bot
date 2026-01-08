const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY
});

async function generateResponse(chatHistory) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: chatHistory,
    config: {
      systemInstruction:"give answer only in 10 words only",
    },
  })
  return response.text;
}

module.exports = generateResponse;