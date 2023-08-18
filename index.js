import express from 'express';
import config from './utils/config.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import { errorHandler } from './utils/error-handler.js';
import { fileURLToPath } from 'url';
import indexRouter from './routes/index.routes.js'; 
import path from 'path';

// Convierte la URL a una ruta de sistema de archivos
const currentModulePath = fileURLToPath(import.meta.url);
// Obtiene el directorio base del módulo actual
const currentDirectory = path.dirname(currentModulePath);

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(currentDirectory, 'views')); 
app.use('/', indexRouter);

//Middlewares 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public'));

app.get('/scripts/typewriter.js', (req, res) => {
  res.sendFile(__dirname + '/scripts/typewriter.js');
});

// Global error Handler 
app.use(errorHandler);

// Start Server 
const port = config.APP_PORT || 3000;
const server = app.listen(port, function () {
  console.info(`Server running on port ${port}`);
});


export default { app, server };


