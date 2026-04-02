import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  // Recuperamos el token del localStorage [cite: 177, 178]
  const token = localStorage.getItem('token');

  // Si el token existe, clonamos la petición y añadimos el header [cite: 179, 180, 181]
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}` // Usamos el estándar Bearer [cite: 182, 183, 199]
      }
    });
    return next(cloned); // Enviamos la petición clonada [cite: 186, 203]
  }

  // Si no hay token, la petición sigue su curso normal [cite: 193]
  return next(req);
};