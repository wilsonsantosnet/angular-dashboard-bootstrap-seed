import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {

    get(key: string) {
        return localStorage.getItem(key);
    }

    add(key: string, data: any) {
        localStorage.setItem(key, data);
    }

    update(key: string, data: any) {
        localStorage.setItem(key, data);
    }

    remove(key: string) {
        localStorage.removeItem(key);
    }

    reset() {
        localStorage.clear();
    }

}
