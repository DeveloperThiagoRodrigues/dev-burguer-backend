import { Router } from 'express';   
import multer from 'multer';

import ProductController from './app/controllers/ProductController.js';
import SessionController from './app/controllers/SessionController.js';
import UserController from './app/controllers/UserController.js';
import CategoryController from './app/controllers/CategoryController.js';
import OrderController from './app/controllers/OrderController.js';
import CreatePaymentIntentController from './app/controllers/stripe/CreatePaymentIntentController.js';

import multerConfig from './config/multer.cjs';
import authMiddleware from './app/middlewares/auth.js';
import adminMiddleware from './app/middlewares/admin.js';

const routes = new Router();
const upload = multer(multerConfig);

// rotas públicas
routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

// rotas protegidas
routes.use(authMiddleware);

// produtos (somente admin cria/edita)
routes.post('/products', adminMiddleware, upload.single('file'), ProductController.store);
routes.put('/products/:id', adminMiddleware, upload.single('file'), ProductController.update);
routes.get('/products', ProductController.index);

// categorias
routes.post("/categories", upload.single("file"), CategoryController.store);
routes.get("/categories", CategoryController.index);
routes.put("/categories/:id", upload.single("file"), CategoryController.update);

// pedidos
routes.post("/orders", OrderController.store);
routes.get("/orders", OrderController.index);
routes.put("/orders/:id", OrderController.update);

// pagamento stripe
routes.post("/create-payment-intent", CreatePaymentIntentController.store);

export default routes;
