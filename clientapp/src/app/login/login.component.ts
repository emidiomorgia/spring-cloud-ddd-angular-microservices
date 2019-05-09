import { Component, OnInit } from '@angular/core';
import { AuthService } from '../infrastructure/auth.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';


declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authService: AuthService;
  router: Router;

  public username: string;
  public password: string;
  public showUsernameValidationError : boolean;
  public showPasswordValidationError : boolean;

  constructor(authService: AuthService, router: Router) {
    this.authService = authService;
    this.router = router;
  }

  public loginClicked() {
    let isValid: boolean;
    this.showUsernameValidationError=!this.username;
    this.showPasswordValidationError=!this.password;
    isValid = this.showUsernameValidationError && this.showPasswordValidationError;
    if (isValid) {
      this.authService.login(this.username, this.password).subscribe(result => {
        if (result) {
          this.router.navigate(['/home']);
        } else {

        }
      });
    }
  }

  ngOnInit() {
    $('.login-content [data-toggle="flip"]').click(() => {
      $('.login-box').toggleClass('flipped');
      return false;
    });
  }

}
