  import express from "express";
  import cors from "cors";
  import bodyParser from "body-parser";
  import { OpenAI } from "openai";
  import dotenv from "dotenv";

  dotenv.config();

  const app = express();
  const port = process.env.PORT || 5000;

  app.use(cors());
  app.use(bodyParser.json());

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const titleResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `Give me a bold rap song title about this mood: ${mood}` }]
    });
    const title = titleResponse.data.choices[0].message.content.trim();

    const chorusResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `Write a 4-bar trap-style chorus for a song titled "${title}" about the mood: ${mood}. No profanity.` }]
    });
    const chorus = chorusResponse.data.choices[0].message.content.trim();

    const beatResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `Describe a beat that would fit the chorus: "${chorus}" and mood: "${mood}"` }]
    });
    const beat = beatResponse.data.choices[0].message.content.trim();

    res.json({ title, chorus, beat });
  } catch (error) {
    console.error("OpenAI error:", error);
    res.status(500).json({ error: "Failed to generate DreamDrop" });
  }
  ;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});