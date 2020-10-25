import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public blockchain;

  constructor(private blockchainService: BlockchainService,private _user: UserService, private _router: Router) {
    this.blockchain = blockchainService.blockchainInstance;
    this._user.user().subscribe(
      (data) => { },
      (error) => this._router.navigate(["/login"])
    );
  }

  ngOnInit() {
  }
}
