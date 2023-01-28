import { Component, Input } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Transaction } from 'src/app/services/Transaction';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
})
export class TransactionsTableComponent {
  @Input() public transactions: Transaction[] = [];

  constructor(public blockchainService: BlockchainService) {}
}
