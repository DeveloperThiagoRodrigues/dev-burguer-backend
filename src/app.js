import express from 'express';
import routes from './routes.js';
import fileRouteConfig from './config/fileRoutes.cjs';
import cors from 'cors';
import 'dotenv/config';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 👇 SERVIR UPLOADS
app.use(
  '/product-file',
  express.static(path.resolve(__dirname, '..', 'uploads/products'))
);

app.use(
  '/category-file',
  express.static(path.resolve(__dirname, '..', 'uploads/categories'))
);
