import 'dotenv/config';
import express from 'express';
import routes from './routes.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Corrige __dirname no ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares básicos
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
========================================
 SERVIR ARQUIVOS ESTÁTICOS (IMAGENS)
========================================

Todos os arquivos dentro de /uploads
ficam acessíveis via:

https://SEU_BACKEND/uploads/NOME_DO_ARQUIVO.png

Exemplo:
https://devburguer-backend.../uploads/db605cfa-...-burger_3.png
*/

app.use(
  '/uploads',
  express.static(path.resolve(__dirname, '..', 'uploads'))
);

// Suas rotas normais da API
app.use(routes);

// Export obrigatório
export default app;
