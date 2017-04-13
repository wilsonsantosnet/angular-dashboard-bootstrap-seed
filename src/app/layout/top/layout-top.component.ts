import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'layout-top',
    templateUrl: './layout-top.component.html',
})
export class LayoutTopComponent {
    @Output()
    changeMenu: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    menuOpen: boolean;

    toggleMenu() {
        this.changeMenu.emit();
    }
}
