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
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 500,
      });

      // Check if the response is valid JSON
      const isValidJson = (text) => {
        try {
          JSON.parse(text);
          return true;
        } catch (error) {
          return false;
        }
      };

      // Validate JSON
      if (isValidJson(response.choices[0].text)) {
        responseValid = true;
        const json = JSON.parse(response.choices[0].text.trim());
        return json;
      } else {
        console.log("Invalid response, retrying...");
      }
    
};

// Export function
module.exports = {
  OpenAiPrediction,
};
