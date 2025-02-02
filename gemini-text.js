import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI("AIzaSyC7KMM_AliQb0DoO-cM0Mrl3tGdLGjW0q4");

export async function TextGenerate() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = "tell me about this linkedin profile : https://www.linkedin.com/in/shad-c-t/ ";

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text; // Return the generated text
  } catch (error) {
    console.error("Error during text generation:", error);
    throw error; // Rethrow the error for handling in server.js
  }
}
