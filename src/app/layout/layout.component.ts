import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
    selector: 'layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

    menuOpen: boolean;

    ngOnInit() {
        this.menuOpen = Cookie.get('menuOpen') === 'true';
    }

    onChangeMenu(message: string): void {
        this.menuOpen = !this.menuOpen;
        Cookie.set('menuOpen', this.menuOpen.toString());
    }

}
