// Import OpenAI modules
const OpenAI = require("openai");

require("dotenv").config();
const { OPENAI_API_KEY } = process.env;

// Configure API key
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

// Prediction function
const OpenAiPrediction = async (input) => {
  // Get OpenAI response
  const response = await openai.completions.create({
    model: "text-davinci-003",
    prompt: "say test",
    temperature: 0.7,
    max_tokens: 500,
  });
};

// Export function
module.exports = {
  OpenAiPrediction,
};
