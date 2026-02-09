import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

const R2R_KEY = "YOUR_API_KEY";

app.get("/routes", async (req, res) => {
  const { from, to } = req.query;

  const url = `https://api.rome2rio.com/1.4/json/Search?key=${R2R_KEY}&oName=${from}&dName=${to}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data.routes);
  } catch (err) {
    res.status(500).json({ error: "Route error" });
  }
});

app.listen(PORT, () => {
  console.log("Midway backend running");
});
