import express from 'express';
import routes from './routes.js';
import fileRouteConfig from './config/fileRoutes.cjs';
import cors from 'cors';

const app = express();

// ✅ libera frontend do easypanel e localhost
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://dev-burguer-devburger-frontend.1e7gn0.easypanel.host'
  ],
  methods: ['GET','POST','PUT','DELETE','PATCH'],
  allowedHeaders: ['Content-Type','Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// arquivos estáticos
app.use('/product-file', fileRouteConfig);
app.use('/category-file', fileRouteConfig);

// rotas da API
app.use(routes);

export default app;
