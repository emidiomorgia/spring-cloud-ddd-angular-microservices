import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'clientapp';

  ngOnInit(): void {
    this.jqBsInit();
  }

  private jqBsInit() {
    var treeviewMenu = $('.app-menu');
    // Toggle Sidebar
    $('[data-toggle="sidebar"]').click(function (event) {
      event.preventDefault();
      $('.app').toggleClass('sidenav-toggled');
    });
    // Activate sidebar treeview toggle
    $("[data-toggle='treeview']").click(function (event) {
      event.preventDefault();
      if (!$(this).parent().hasClass('is-expanded')) {
        treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
      }
      $(this).parent().toggleClass('is-expanded');
    });
    // Set initial active toggle
    $("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');
  }
}
