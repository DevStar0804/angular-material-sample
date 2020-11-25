import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    color: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'new',  icon: '/assets/img/add.svg', color: '#f1c214'},
    { path: '/user-profile', title: 'data',  icon: '/assets/img/data.svg', color: '#FD4B4C' },
    { path: '/table-list', title: 'settings',  icon: '/assets/img/setting.svg', color: '#428cdf'},
    { path: '/typography', title: 'help',  icon: '/assets/img/help.svg', color: '#1DC89B' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  navitemFocusIn(title) {
      document.querySelector("."+title).className="nav-link "+title+"-active";
  }
  navitemFocusOut(title) {
      document.querySelector("."+title+"-active").className="nav-link "+title;
  }
}
