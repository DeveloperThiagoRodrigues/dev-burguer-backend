<<<<<<< HEAD
import 'dotenv/config'
import express from 'express'
import routes from './routes.js'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const uploadPath = path.resolve(__dirname, '..', 'uploads')
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  '/product-file',
  express.static(path.resolve(process.cwd(), 'uploads/products'))
);
=======
import 'dotenv/config';
import express from 'express';
import routes from './routes.js';
import fileRoutesConfig from './config/fileRoutes.cjs';
import cors from 'cors';


const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/product-file', fileRoutesConfig);
app.use('/category-file', fileRoutesConfig);
>>>>>>> 8b87eda (programming logic change)

app.use(
  '/category-file',
  express.static(path.resolve(process.cwd(), 'uploads/categories'))
);
app.use(routes)
export default app
