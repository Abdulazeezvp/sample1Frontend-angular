import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    data: any;
    constructor(public auth: AuthService, public router: Router) { }
    canActivate(): boolean {
        this.data = localStorage.getItem('userData');
        this.data = JSON.parse(this.data);
        if (this.data && this.data.token) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}