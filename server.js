const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Accept plain text so we can echo EXACTLY what we receive
app.use(express.text({ type: "*/*" }));

// Echo endpoint (required)
app.post("/", (req, res) => {
  res.status(200).send(req.body);
});

// Optional health route
app.get("/", (req, res) => {
  res.status(200).send("Echo server is running. Send a POST request to /");
});

// Only start server if run directly (helps testing)
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
