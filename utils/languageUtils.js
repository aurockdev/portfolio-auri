// Usando el encabezado "Accept-Language"
function getUserLanguageFromHeader(headers) {
  const acceptLanguageHeader = headers['accept-language'];
  const preferredLanguages = acceptLanguageHeader.split(',');
  return preferredLanguages[0];
}

// Usando un query parameter en la URL
function getUserLanguageFromQuery(query) {
  const queryLang = query.lang;
  return queryLang === 'es' ? 'es' : 'en';
}

// Usando la información de la sesión del usuario
function getUserLanguageFromSession(session) {
  if (session && session.language) {
    return session.language;
  } else {
    return 'en';
  }
}

export default {
  getUserLanguageFromHeader,
  getUserLanguageFromQuery,
  getUserLanguageFromSession
};