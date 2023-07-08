
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.SECRET_KEY
});

export const openai = new OpenAIApi(configuration);