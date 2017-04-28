import { ECacheType } from 'app/common/cache/type-cache.enum';
import { CacheService } from './../common/cache/cache.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

    menuOpen: boolean;

    constructor() { }

    ngOnInit() {
        this.menuOpen = CacheService.get('menuOpen', ECacheType.COOKIE) === 'true';
    }

    onChangeMenu(message: string): void {
        this.menuOpen = !this.menuOpen;
        CacheService.add('menuOpen', this.menuOpen.toString(), ECacheType.COOKIE);
    }

}
