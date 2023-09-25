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

};

// Export function
module.exports = {
  OpenAiPrediction,
};
