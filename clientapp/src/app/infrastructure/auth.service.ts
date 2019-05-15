import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, catchError, map, tap } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { LoginResponse } from './loginResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http: HttpClient;

  constructor(http : HttpClient) {
    this.http = http;
  }

  public isAuthenticated(): boolean {
    const token: string = this.getAuthToken();
    return token != null;
  }

  public getAuthToken(): string {
    return localStorage.getItem('auth_token');
  }

  public login(username: string, password: string): Observable<boolean> {
    let res: boolean = false;
    let p = new HttpParams()
              .set('username',username)
              .set('password',password);
    debugger;
    return this.http.get<LoginResponse>('/api/genericservice/login/login',{ params : p})
    .pipe(
      tap(data => {
        debugger;
        this.setAuthToken(data.token)
      }),
      map(result => true),
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse) {
    debugger;
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
        errorMessage = err.message;
    } else {
      if(err.status >= 400 && err.status < 500){
        errorMessage = err.error.message;
      } else {
        errorMessage = `Server or communication error: ${err.message}`;
      }

    }

    return throwError(errorMessage);
  }

  public setAuthToken(token: string) {
    if (token != null) {
      localStorage.setItem('auth_token', token);
    } else {
      localStorage.removeItem('auth_token');
    }
  }

}
