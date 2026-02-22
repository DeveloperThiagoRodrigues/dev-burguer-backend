import express from "express";

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running at port ${PORT}...`);
});
