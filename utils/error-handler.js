export const errorHandler = (err, req, res, next) => {
  let status, msg, location, type;

  switch(err.message){
    case 'ErrorNotFound': 
      status = 404; 
      msg = 'Página no encontrada.';
      location = 'body'; 
      type = 'User Error';
    break;
  }
};