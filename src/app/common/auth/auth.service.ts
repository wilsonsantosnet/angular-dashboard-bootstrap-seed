import { Auth } from './auth';
import { Injectable } from '@angular/core';

import { ApiService } from '../rest/api.service';

@Injectable()
export class AuthService extends ApiService<Auth> {

    login(model: Auth, success, error) {
        this.Post(model).subscribe(
            data => {
                this.cache.add('TOKEN', data.Data.Token);
                success(data);
            },
            err => {
                error(err);
            });
    }

    logout() {
        this.cache.reset();
        window.location.href = '/';
    }

    isAuthenticated(): boolean {
        const token = this.cache.get('TOKEN');
        return token !== null;
    }

}
