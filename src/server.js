import express from "express";

const app = express();   // ← ISSO ESTÁ FALTANDO

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running at port ${PORT}...`);
});
