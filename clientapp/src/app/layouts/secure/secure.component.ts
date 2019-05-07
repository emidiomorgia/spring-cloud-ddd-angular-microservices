import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/infrastructure/auth.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  authService: AuthService;
  router: Router;

  constructor(authService: AuthService, router: Router) {
    this.authService = authService;
    this.router = router;
  }
  ngOnInit(): void {
    this.jqBsInit();
  }

  public logoutClicked(){
    debugger;
    this.authService.setAuthToken(null);
    this.router.navigate(['login']);
    console.log('logout');

  }

  private jqBsInit() {
    const treeviewMenu = $('.app-menu');
    // Toggle Sidebar
    $('[data-toggle="sidebar"]').click( (event) => {
      event.preventDefault();
      $('.app').toggleClass('sidenav-toggled');
    });
    // Activate sidebar treeview toggle
    $('[data-toggle="treeview"]').click((event) => {
      event.preventDefault();
      if (!$(this).parent().hasClass('is-expanded')) {
        treeviewMenu.find('[data-toggle="treeview"]').parent().removeClass('is-expanded');
      }
      $(this).parent().toggleClass('is-expanded');
    });
    // Set initial active toggle
    $('[data-toggle="treeview."].is-expanded').parent().toggleClass('is-expanded');
  }


}
