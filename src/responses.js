require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors());

function textResponse(body) {
  response =
  {
    "text": {
      "text":
        [body]
    }
  }
  return response;
}

function quickResponse(title, body) {
  response = 
  {
    "quickReplies": {
      "title": title,
      "quickReplies": body
    }
  }
  return response;
}

function cardResponse(title, subtitle, img) {
  response =
  {
    "card": {
      "title": title,
      "imageUri": "https://chaide.mippya.com/asesor.png",
      "subtitle": subtitle,
    }
  }
  return response;
}

module.exports = {
  textResponse,
  quickResponse,
  cardResponse
}