import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class GuardService implements CanActivate {
  authService: AuthService;
  router: Router;

  constructor(authService: AuthService, router: Router){
    this.authService = authService;
    this.router = router;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    debugger;
    const isAuthenticated: boolean = this.authService.isAuthenticated();
    if (!isAuthenticated) {
      this.router.navigate(['login']);
      console.log('canActivate=false');
      return false;
    }
    console.log('canActivate=true');
    return true;
  }
}
