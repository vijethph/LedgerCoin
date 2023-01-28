import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Transaction } from 'src/app/services/Transaction';

@Component({
  selector: 'app-wallet-balance',
  templateUrl: './wallet-balance.component.html',
  styleUrls: ['./wallet-balance.component.scss'],
})
export class WalletBalanceComponent implements OnInit {
  public walletAddress = 'system';

  public balance = 100;

  public transactions: Transaction[] = [];

  constructor(
    private route: ActivatedRoute,
    private blockchainService: BlockchainService,
    private _user: UserService,
    private _router: Router
  ) {
    this._user.user().subscribe(
      (data) => {},
      (error) => this._router.navigate(['/login'])
    );
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.walletAddress = params['address'];

      const blockchain = this.blockchainService.blockchainInstance;
      this.balance = blockchain.getBalanceOfAddress(this.walletAddress);
      this.transactions = blockchain.getAllTransactionsForWallet(
        this.walletAddress
      );
    });
  }
}
