import 'dotenv/config';
import express from 'express';
import routes from './routes.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import authMiddleware from './app/middlewares/auth.js'; // 👈 importa aqui

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uploadsPath = path.resolve(__dirname, '..', 'uploads');
app.use('/product-file', express.static(uploadsPath));
app.use('/category-file', express.static(uploadsPath));
app.use('/uploads', express.static(uploadsPath));

app.use(routes); // authMiddleware já está dentro do routes.js na ordem certa
