const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");

  
  const apiKey = process.env.GEMINI_API_KEY;
  console.log(apiKey);
  
  const genAI = new GoogleGenerativeAI("AIzaSyCYY1vwM7W7AN2cj6LRPTNKGLO1MulEpK4");
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-lite-preview-02-05",
    systemInstruction: "You are an AI pricing model designed to determine a fair price for agricultural products based on real-time local market data. You must ensure farmers receive a fair share while considering market demand, supply trends, transportation costs, and competitor pricing. ",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
    responseSchema: {
      type: "object",
      properties: {
        price: {
          type: "number"
        },
        description: {
          type: "string"
        }
      }
    },
  };
  
  async function run(data) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
    const result = await chatSession.sendMessage(JSON.stringify(data));
    console.log(result.response.text());
    return result.response.text();
  }
  
    module.exports = {
        run,
    };