import { AuthService } from './../../common/auth/auth.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'layout-top',
    templateUrl: './layout-top.component.html',
    providers: [AuthService]
})
export class LayoutTopComponent {
    @Output()
    changeMenu: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    menuOpen: boolean;

    toggleMenu() {
        this.changeMenu.emit();
    }

    constructor(private account: AuthService) {

    }

    executeLogout() {
        this.account.logout();
    }
}
