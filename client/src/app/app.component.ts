import { Component } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { UserService } from 'src/app/services/user.service';
import { Blockchain } from './services/Blockchain';
// import { ParticlesConfig } from './particles-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  public blockchain: Blockchain;

  public userservice: UserService;

  constructor(
    private userService: UserService,
    private blockchainService: BlockchainService
  ) {
    this.blockchain = blockchainService.blockchainInstance;
    this.userservice = userService;
  }

  thereArePendingTransactions() {
    return this.blockchain.pendingTransactions.length > 0;
  }

  isUserLoggedIn() {
    // console.log(this.userservice.loggedIn);
    return this.userservice.loggedIn;
  }
}
