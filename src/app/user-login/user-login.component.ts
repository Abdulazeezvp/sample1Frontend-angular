import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [AuthService,AuthGuardService]
})
export class UserLoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

  }

  login() {
    if (this.loginForm.valid) {
      this.auth.userLogin(this.loginForm.value).subscribe((res: any) => {
        if (res.status = true) {
          const jsonData = JSON.stringify(res.data);
          localStorage.setItem('userData', jsonData);
          this.router.navigate(['/home']);
        }else{
          alert(res.msg);
        }
      });

    }else{
      alert('please enter details');
    }
  }

}
