import express from "express";
import cors from "cors";
import routes from "./routes.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  "/product-file",
  express.static(path.resolve(__dirname, "..", "uploads"))
);

app.use(
  "/category-file",
  express.static(path.resolve(__dirname, "..", "uploads"))
);

app.use(routes);

export default app;
