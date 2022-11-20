const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const {Configuration, OpenAIApi} = require("openai");
const path = require("path");

// import dotenv from "dotenv";
// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import path from "path"

// import { Configuration, OpenAIApi } from "openai";

dotenv.config({origin: "*"});

const PORT = process.env.PORT || 5001;
const app = express();
app.use(cors());
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
app.use(express.static(path.join(__dirname, "../aiChat/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../aiChat/build", "index.html"))
});


const openai = new OpenAIApi(configuration);

app.get("/", (req, res) => {
  console.log("SERVER ON")
  res.status(200).send({on: "Server On"});
});

app.post("/chat", (req, res) => {
  const msg = req.body.msg;
  if (!msg) return res.status(400);
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