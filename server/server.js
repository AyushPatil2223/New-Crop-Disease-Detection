// server.js
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
        <h3>🤖 Hello! I am your plant care assistant.</h3>
        <p>Ask me anything about your plant's health!</p>
      </body>
    </html>
  `);
});

app.listen(6000, () => {
  console.log("🌱 Demo Chatbot server running at http://localhost:6000");
});
