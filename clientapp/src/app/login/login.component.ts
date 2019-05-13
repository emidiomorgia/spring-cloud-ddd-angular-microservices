import { Component, OnInit } from '@angular/core';
import { AuthService } from '../infrastructure/auth.service';
import { Router } from '@angular/router';


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
  public validationError : string;

  constructor(authService: AuthService, router: Router) {
    this.username=null;
    this.password=null;
    this.showPasswordValidationError=false;
    this.validationError=null;
    this.showUsernameValidationError=false;

    this.authService = authService;
    this.router = router;
  }

  private isStringNullOrEmpty(value : string) : boolean{
    return value == undefined || value == null || value.length == 0 ;
  }

  public loginClicked() {
    let notEmpty: boolean;
    this.showUsernameValidationError=this.isStringNullOrEmpty(this.username);
    this.showPasswordValidationError=this.isStringNullOrEmpty(this.password);
    notEmpty = !this.showUsernameValidationError && !this.showPasswordValidationError;

    if (notEmpty) {
      this.authService.login(this.username, this.password).subscribe(found => {
        if (found) {
          this.router.navigate(['/home']);
        } else {
          this.validationError="User not found. Please check username and/or password.";
        }
      },

      error => {
        this.validationError=error;
      },

      () => {}

      );
    }
  }

  ngOnInit() {
    $('.login-content [data-toggle="flip"]').click(() => {
      $('.login-box').toggleClass('flipped');
      return false;
    });
  }

}
