import express from 'express';
import routes from './routes.js';
import fileRouteConfig from './config/fileRoutes.cjs';
import cors from 'cors';

const allowedOrigins = [
  'http://localhost:5173',
  'https://dev-burguer-devburger-frontend.1e7gn0.easypanel.host'
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization']
}));

// ESSENCIAL PARA PREFLIGHT
app.options('*', cors());

app.use(routes);

export default app;
