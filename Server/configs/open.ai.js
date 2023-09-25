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
I want you to act as an AI assistant that can analyze forest sensor data and generate a forecast.

Imagine you are helping a forest researcher analyze data from a weather monitoring station in a forest.

The data includes a forest ID, temperature readings, and humidity readings. The temperature and humidity readings are coming from a sensor with the time and day (24-hour format).

Your task is to provide a detailed forecast based on this data and the current condition in the forest, considering the forest's coordinates.

Here's the input data format:

${JSON.stringify(input, null, 2)}

Please generate a JSON object, taking the following as an example with the same structure as provided:

{
  "forestId": "650feb23594bb545d4cdd338",
  "temperature": [
    { "value": 17.5, "hour": 24, "day": 24, "source": "real" },
    { "value": 18, "hour": 1, "day": 25, "source": "predicted" }
    { "value": 18.5, "hour": 2, "day": 25, "source": "predicted" }
  ],
  "humidity": [
    { "value": 35, "hour": 24, "day": 24, "source": "real" },
    { "value": 34, "hour": 1, "day": 25, "source": "predicted" }
    { "value": 33, "hour": 2, "day": 25, "source": "predicted" }
  ],
  "forecast": "Here is your detailed forest forecast text.",
  "fire_alarm": false,
  "condition": "night"
}

Ensure that the "forecast" field provides valuable insights into the weather conditions and any recommendations. The "condition" field should represent the current weather condition in the forest, which can ONLY be "sunny," "rainy," "stormy," or "night."

Return this JSON object as your response, and do not include any additional text, explanations, or notes before or after the JSON object.

You must follow this JSON format strictly. If the response format is not JSON or does not match the specified structure, please retry until it does.

Thank you for your assistance!
`;

  let responseValid = false;

  while (!responseValid) {
    try {
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
    } catch (error) {
      console.error("Error from OpenAI:", error);
      throw error; // Rethrow the error for the calling function to handle
    }
  }
};

// Export function
module.exports = {
  OpenAiPrediction,
};
