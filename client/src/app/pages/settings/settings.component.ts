import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  public blockchain;

  constructor(
    private blockchainService: BlockchainService,
    private _user: UserService,
    private _router: Router
  ) {
    this.blockchain = blockchainService.blockchainInstance;
    this._user.user().subscribe(
      (data) => {},
      (error) => this._router.navigate(['/login'])
    );
  }
}
