import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Transaction } from 'src/app/services/Transaction';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.scss'],
})
export class PendingTransactionsComponent implements OnInit {
  public pendingTransactions: Transaction[] = [];

  public miningInProgress = false;

  public justAddedTx = false;

  constructor(
    private blockchainService: BlockchainService,
    private _user: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this._user.user().subscribe(
      (data) => {},
      (error) => this.router.navigate(['/login'])
    );
    this.pendingTransactions = blockchainService.getPendingTransactions();
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('addedTx')) {
      this.justAddedTx = true;

      setTimeout(() => {
        this.justAddedTx = false;
      }, 4000);
    }
  }

  minePendingTransactions() {
    this.miningInProgress = true;
    this.blockchainService.minePendingTransactions();
    this.miningInProgress = false;
    this.router.navigate(['/userprofile']);
  }
}
