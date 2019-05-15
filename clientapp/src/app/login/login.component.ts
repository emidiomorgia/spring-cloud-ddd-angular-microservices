import { Component, OnInit } from '@angular/core';
import { AuthService } from '../infrastructure/auth.service';
import { Router } from '@angular/router';
import { HttpParams, HttpClient } from '@angular/common/http';


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
  http: HttpClient;

  constructor(authService: AuthService, router: Router, http : HttpClient) {
    this.username=null;
    this.password=null;
    this.showPasswordValidationError=false;
    this.validationError=null;
    this.showUsernameValidationError=false;

    this.authService = authService;
    this.router = router;
    this.http = http;
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
      let p = new HttpParams()
      .set('username','admin')
      .set('password','admin');

      this.authService.login(this.username, this.password).subscribe(found => {
        if (found) {
          this.router.navigate(['/home']);
        }
      },
      error => {
        this.validationError=error;
      }
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
