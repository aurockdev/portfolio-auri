import express from 'express';
import config from './utils/config.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import { errorHandler } from './utils/error-handler.js';
import indexRouter from './routes/index.routes.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

// Rutas
app.use('/', indexRouter);

// Global error Handler
app.use(errorHandler);

// Start Server
const port = config.PORT || 3000;
const server = app.listen(port, '0.0.0.0', () => {
  console.info(`Server running on port ${port}`);
});

export default { app, server };
