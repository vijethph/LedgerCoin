import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

interface UserData {
  username?: string;
}

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss'],
})
export class UserhomeComponent {
  username = '';

  constructor(private _user: UserService, private _router: Router) {
    this._user.user().subscribe(
      (data: UserData) => this.addName(data),
      (error) => this._router.navigate(['/login'])
    );
  }

  addName(data: UserData) {
    this.username = data.username || '';
  }

  logout() {
    this._user.logout().subscribe(
      (data) => {
        console.log(data);
        this._router.navigate(['/login']);
      },
      (error) => console.error(error)
    );
  }
}
