import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'layout-menu',
    templateUrl: './layout-menu.component.html',
})
export class LayoutMenuComponent {

    @Input()
    menuOpen: boolean;

}
