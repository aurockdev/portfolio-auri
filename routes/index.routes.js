import { Router } from 'express';
import languageUtils from '../utils/languageUtils.js';
import langEs from '../public/languages/lan.es.js';
import langEn from '../public/languages/lan.en.js';

const router = Router();

router.get('/', (req, res) => {
  const userLanguage = languageUtils.getUserLanguageFromHeader(req.headers);

  // Define el objeto de mensajes en función del idioma del usuario
  const messages = (userLanguage === 'es') ? langEs : langEn;

  res.render('index', { messages });
});

export default router;
