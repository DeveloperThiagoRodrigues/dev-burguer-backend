import express from 'express';
import routes from './routes.js';
import fileRouteConfig from './config/fileRoutes.cjs';
import cors from 'cors';

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'https://dev-burguer-devburger-frontend.1e7gn0.easypanel.host'
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/product-file', fileRouteConfig);
app.use('/category-file', fileRouteConfig);

app.use(routes);

export default app;
