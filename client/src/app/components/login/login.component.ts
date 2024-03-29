import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required),
  });

  constructor(private _router: Router, private _user: UserService) {}

  moveToRegister() {
    this._router.navigate(['/register']);
  }

  login() {
    if (!this.loginForm.valid) {
      console.log('Invalid');
      return;
    }

    console.log(JSON.stringify(this.loginForm.value));
    this._user.login(JSON.stringify(this.loginForm.value)).subscribe(
      (data) => {
        // console.log(data);
        // console.log('hello there');
        this._router.navigate(['/user']);
      },
      (error) => console.error(error)
    );
  }
}
