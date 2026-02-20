import express from 'express';
import routes from './routes.js';
import fileRouteConfig from './config/fileRoutes.cjs';
import cors from 'cors';
import 'dotenv/config';

const app = express();


app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/product-file', express.static('uploads/products'));
app.use('/category-file', express.static('uploads/categories'));


app.use(routes);

export default app;
