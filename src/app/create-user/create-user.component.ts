import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [AuthService]
})
export class CreateUserComponent implements OnInit {


  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  createUser() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.auth.createNewUser(this.userForm.value).subscribe((res: any) => {
        if (res.status == true) {
          this.router.navigate(['login']);
        } else {
          alert('something went wrong');
        }
      });


    } else {
      alert('all fileds are required!!');
    }

  }

}
