import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";


import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const PORT = process.env.PORT || 5001;
const app = express();
app.use(cors({ origin: "*" }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Expose-Headers', '*')
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.get("/", (req, res) => {
  res.send("Server On");
});

app.post("/chat", (req, res) => {
  const msg = req.body.msg;
  openai.createCompletion({
    model: "text-davinci-002",
    prompt: `${msg}`,
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    stop: [" Human:", " AI:"],
  }).then(result => {
    const response = result.data.choices[0].text;
    res.status(200).send({ response });
  }).catch(err => {
    res.status(503);
  });
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));