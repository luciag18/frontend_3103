import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
// Importamos la función que acabamos de crear
import { jwtInterceptor } from './interceptors/jwt.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    // Aquí registramos el interceptor como una función [cite: 205, 206]
    provideHttpClient(withInterceptors([jwtInterceptor]))
  ]
};