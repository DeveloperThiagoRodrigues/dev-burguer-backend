import express from 'express';
import routes from './routes.js';
import fileRouteConfig from './config/fileRoutes.cjs';
import cors from 'cors';


const app = express();
const corsOptions = {
    origin: process.env.CORS_ORIGIN, // Puxa o valor do Easypanel
    credentials: true, // Importante para o login
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions)); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/product-file', fileRouteConfig);
app.use('/category-file', fileRouteConfig);


app.use(routes);

export default app;
