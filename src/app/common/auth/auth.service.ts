import { ECacheType } from 'app/common/cache/type-cache.enum';
import { CacheService } from './../cache/cache.service';
import { Auth } from './auth';
import { Injectable } from '@angular/core';
import { ApiService } from '../rest/api.service';

@Injectable()
export class AuthService extends ApiService<Auth> {

    login(model: Auth, success, error) {
        this.Post(model).subscribe(
            data => {
                CacheService.add('TOKEN', data.Data.Token, ECacheType.COOKIE, 0.1);
                success(data);
            },
            err => {
                error(err);
            });
    }

    logout() {
        CacheService.reset();
        window.location.href = '/';
    }

    isAuthenticated(): boolean {
        const token = CacheService.get('TOKEN', ECacheType.COOKIE);
        return token !== null;
    }

}
