/**
 * Este módulo se encarga de cargar y validar las variables de entorno utilizadas en la aplicación.
 * 
 * @param {void}
 * @returns {object} Objeto de configuración con las variables de entorno validadas.
 * 
 * @author Auristela Diaz
 */

import path from 'path';
import { Joi } from 'celebrate';
import joiMessages from './joimessages.js';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Obtener el directorio actual del archivo en ejecución
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Levanto si existe el archivo .env (para uso local)
dotenv.config();


// Definir el esquema de validación para las variables de entorno
const processEnvSchema = Joi.object({
  //APP Env Vars 
  PORT: Joi.number().port().required(),
  APP_NAME: Joi.string().required(),

  //Mailer Vars 
  GMAIL_ADDRESS: Joi.string().required(),
  GMAIL_APP_PW: Joi.string().required(),
});

// Opciones de validación para Joi
const validationOptions = {
  abortEarly: false, // No abortar al encontrar un error
  allowUnknown: true, // Permitir variables no definidas en el esquema
  stripUnknown: true, // Eliminar variables no definidas del objeto validado
  joiMessages, // Mensahes personalizados de error
};

let configObject; 
try {
  // Validar las variables de entorno usando el esquema definido 
  const { error, value } = processEnvSchema.validate(process.env, validationOptions);

  if(error){
    throw error; 
  } else {
    configObject = value;
  }

} catch (err){
  // Manejo de errores en caso de problemas con las variables de entorno 
  console.error(`Error en las variables de entorno: ${err.message}`);
  process.exit(1);
}

export default configObject;