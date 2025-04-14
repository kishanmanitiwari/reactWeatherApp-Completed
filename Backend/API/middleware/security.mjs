import dotenv from "dotenv";
dotenv.config();

const validApiKey = process.env.validApiKey;

export function securityAiKey(req, res, next) {
  const apiKey = req.query.API_KEY || req.headers["x-api-key"];

  if (apiKey == undefined) {
    return res.status(401).json({ error: "Please enter a API Key" });
  }

  if (apiKey != validApiKey) {
    return res.status(403).json({ error: "Please enter a valid API Key" });
  }

  next();
}


