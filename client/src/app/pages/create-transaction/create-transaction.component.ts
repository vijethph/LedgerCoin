import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {
  BlockchainService,
  IWalletKey,
} from 'src/app/services/blockchain.service';
import { Transaction } from 'src/app/services/Transaction';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss'],
})
export class CreateTransactionComponent {
  public newTx = new Transaction();

  public ownWalletKey: IWalletKey;

  constructor(
    private blockchainService: BlockchainService,
    private _user: UserService,
    private router: Router
  ) {
    this._user.user().subscribe(
      (data) => {},
      (error) => this.router.navigate(['/login'])
    );
    this.newTx = new Transaction();
    // eslint-disable-next-line prefer-destructuring
    this.ownWalletKey = blockchainService.walletKeys[0];
  }

  createTransaction() {
    // eslint-disable-next-line prefer-destructuring
    const newTx = this.newTx;

    // Set the FROM address and sign the transaction
    newTx.fromAddress = this.ownWalletKey.publicKey;
    newTx.signTransaction(this.ownWalletKey.keyObj);

    try {
      this.blockchainService.addTransaction(this.newTx);
    } catch (e) {
      alert(e);
      return;
    }

    this.router.navigate(['/new/transaction/pending', { addedTx: true }]);
    this.newTx = new Transaction();
  }
}
