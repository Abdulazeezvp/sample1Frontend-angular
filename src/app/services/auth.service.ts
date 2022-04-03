import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }
    createNewUser(data: any) {
        return this.http.post('http://127.0.0.1:8000/api/user/create', data);
    }

    userLogin(data:any){
        return this.http.post('http://127.0.0.1:8000/api/user/login', data);

    }


}