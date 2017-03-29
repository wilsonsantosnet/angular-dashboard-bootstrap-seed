import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  activeMenuId: string;

  themesVisible: boolean;

  mobileMenuActive: boolean;

  toggleMenu(e) {
    this.mobileMenuActive = !this.mobileMenuActive;
    e.preventDefault();
  }

}
