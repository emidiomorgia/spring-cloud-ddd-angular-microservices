import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    debugger;
    const token: string = this.getAuthToken();
    return token != null;

  }

  public getAuthToken(): string {
    debugger;
    return localStorage.getItem('auth_token');
  }

  public setAuthToken(token: string) {
    debugger;
    if (token != null) {
      localStorage.setItem('auth_token', token);
    } else {
      localStorage.removeItem('auth_token');
    }

  }

}
