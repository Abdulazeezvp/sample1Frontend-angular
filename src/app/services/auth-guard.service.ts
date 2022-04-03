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
        if (this.data.status && this.data.status == true && this.data.token) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}