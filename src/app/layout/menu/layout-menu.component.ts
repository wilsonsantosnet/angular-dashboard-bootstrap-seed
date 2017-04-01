import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'layout-menu',
    templateUrl: './layout-menu.component.html',
    styleUrls: ['./layout-menu.component.css']
})
export class LayoutMenuComponent {

    @Input()
    menuOpen: boolean;

}
