import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    this.jqBsInit();
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
