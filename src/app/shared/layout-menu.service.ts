import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';

@Injectable()
export class MySharedService {
    menuActive: boolean;
    dataChange: Observable<any>;
    menuActiveChangeObserver: any;

    constructor() {
        this.dataChange = new Observable((observer: any) => {
            this.menuActiveChangeObserver = observer;
        });
    }

    setData(menuActive: boolean) {
        this.menuActive = menuActive;
        this.menuActiveChangeObserver.next(this.menuActive);
    }
}
