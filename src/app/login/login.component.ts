import { Subject } from 'rxjs/Subject';
import { AuthService } from './../common/auth/auth.service';
import { Auth } from './../common/auth/auth';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [AuthService]
})
export class LoginComponent implements OnInit {

    model = new Auth();
    error: string;
    success: string;

    constructor(private account: AuthService) {

    }

    ngOnInit() {
        this.account.setResource('ColaboradorAuth', 'http://cnabox.com.br:8099/AccessApi/api');
    }

    executeLogin() {
        this.error = null;
        this.success = null;
        this.account.login(this.model,
            data => {
                this.success = 'Login realizado, aguarde. Redirecionando!';
                window.location.href = '/';
            },
            err => {
                this.error = err.Errors[0];
            });
    }

}
