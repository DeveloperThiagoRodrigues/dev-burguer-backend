import 'dotenv/config';
import express from 'express';
import routes from './routes.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 📦 Pasta real das imagens
const uploadsPath = path.resolve(__dirname, '..', 'uploads');

// 🆕 Nova rota padrão
app.use('/uploads', express.static(uploadsPath));

// 🧠 Compatibilidade com URLs antigas do projeto
app.use('/product-file', express.static(uploadsPath));
app.use('/category-file', express.static(uploadsPath));

// Suas rotas da API
app.use(routes);

export default app;
