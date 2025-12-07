import { GoogleGenAI } from "@google/genai";
// import dotenv from "dotenv";
// dotenv.config();

const API_KEY = "AIzaSyCDvhgpwdVZTUmTxbORR8lnzpRB1oa0bs0"; 

const ai = new GoogleGenAI({apiKey: API_KEY}); 
// ...
async function run() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
  return response.text;
}

await run();

export default run;