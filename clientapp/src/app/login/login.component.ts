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

  constructor(authService: AuthService, router: Router) {
    this.authService = authService;
    this.router = router;
  }

  public loginClicked() {

    this.authService.login(this.username, this.password).subscribe(result => {
      if (result) {
        this.router.navigate(['/home']);
      } else {

      }
    });
  }

  ngOnInit() {
    $('.login-content [data-toggle="flip"]').click(() => {
      $('.login-box').toggleClass('flipped');
      return false;
    });
  }

}
