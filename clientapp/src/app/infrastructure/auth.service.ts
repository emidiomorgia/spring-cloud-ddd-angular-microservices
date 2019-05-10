import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    const token: string = this.getAuthToken();
    return token != null;
  }

  public getAuthToken(): string {
    return localStorage.getItem('auth_token');
  }

  public login(username: string, password: string): Observable<boolean> {
    let res: boolean = false;

    if (username == 'admin' && password == 'admin'){
      this.setAuthToken('token');
      res=true;

    }

    return of(res).pipe(delay(5000));

  }

  public setAuthToken(token: string) {
    if (token != null) {
      localStorage.setItem('auth_token', token);
    } else {
      localStorage.removeItem('auth_token');
    }
  }

}
