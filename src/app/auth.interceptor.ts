import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { AuthService } from './services/auth.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private _auth: AuthService, private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this._auth.getToken();

    if (token) {
      // Agrega el token a la cabecera de la solicitud
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    //return next.handle(request);
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Redirige al usuario a la página de inicio de sesión o a la renovación del token
          localStorage.clear();
          this.router.navigate(['/login']);
        }
        return throwError(error);
      })
    );
  }
}
