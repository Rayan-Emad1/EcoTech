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
  // Define the modified prompt
  const prompt = `
  I want you to act as an AI assistant to analyze forest sensor data and generate a weather forecast. 
  
  The input data will contain a forest ID, temperature, and humidity readings from a real sensor.
  
  Your task is to predict the temperature and humidity values 2 hours ahead of the latest real sensor reading. 
  
  The predicted values should be realistic based on the real input data.
  
  Only predict 2 data points, each 1 hour apart, after the last real data point. 
  
  The input data is:
  
  ${JSON.stringify(input, null, 2)}
  
  Please respond with a JSON object containing:
  
  - The original input data 
  - Your predicted temperature and humidity values 2 hours ahead
  - A forecast text summarizing the predicted conditions
  - A "condition" value of "sunny", "rainy", "stormy" or "night"
  - Never change real value or forestId
  
  Follow these examples format and not data
  
  Example 1: if real input time was at hour:14 and day:16:
  {
    "forestId": "650feb23594bb545d4cdd338",
    "temperature": [
      { "value": 30, "hour": 14, "day": 16, "source": "real"},  
      { "value": 31, "hour": 15, "day": 16, "source": "predicted"},
      { "value": 32, "hour": 16, "day": 16, "source": "predicted"}
    ],
    "humidity": [
      { "value": 7, "hour": 14, "day": 16, "source": "real"},
      { "value": 4, "hour": 15, "day": 16, "source": "predicted"},  
      { "value": 5, "hour": 16, "day": 16, "source": "predicted"}
    ],
    "forecast": "Sample forecast text",
    "fire_alarm": true,
    "condition": "sunny"
  }

  Example 2: if real input time was at hour:23 and day:27:
  {
    "forestId": "650feb23594bb545d4cdd338",
    "temperature": [
      { "value": 17.5, "hour": 23, "day": 27, "source": "real"},  
      { "value": 18, "hour": 24, "day": 27, "source": "predicted"},
      { "value": 18.5, "hour": 1, "day": 28, "source": "predicted"}
    ],
    "humidity": [
      { "value": 35, "hour": 23, "day": 27, "source": "real"},
      { "value": 34, "hour": 24, "day": 27, "source": "predicted"},  
      { "value": 33, "hour": 1, "day": 28, "source": "predicted"}
    ],
    "forecast": "Sample forecast text",
    "fire_alarm": false,
    "condition": "night"
  }
  
  Ensure that the "forecast" field provides valuable insights into the weather conditions and any recommendations. The "condition" field should represent the current weather condition in the forest, which can ONLY be "sunny," "rainy," "stormy," or "night."

Return this JSON object as your response, and DO NOT INCLUDE any additional text, explanations, or notes before and/or after the JSON object.

You must follow this JSON format strictly. If the response format is not JSON or does not match the specified structure, please retry until it does.
`;

  let responseValid = false;

  while (!responseValid) {
    try {
      // Get OpenAI response
      const response = await openai.completions.create({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.8,
        max_tokens: 1500,
      });

      // Check if the response is valid JSON
      const isValidJson = (text) => {
        try {
          console.log(text);
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
    } catch (error) {
      console.error("Error from OpenAI:", error);
      throw error;
    }
  }
};

// Export function
module.exports = {
  OpenAiPrediction,
};
