import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Block } from 'src/app/services/Block';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { UserService } from 'src/app/services/user.service';

const blockHasTx = (block: Block) => {
  return block.transactions.length > 0;
};

@Component({
  selector: 'app-blockchain-viewer',
  templateUrl: './blockchain-viewer.component.html',
  styleUrls: ['./blockchain-viewer.component.scss'],
})
export class BlockchainViewerComponent {
  public blocks: Block[] = [];

  public selectedBlock: Block;

  constructor(
    private blockchainService: BlockchainService,
    private _user: UserService,
    private _router: Router
  ) {
    this._user.user().subscribe(
      (data) => {},
      (error) => this._router.navigate(['/login'])
    );
    this.blocks = blockchainService.blockchainInstance.chain;
    // eslint-disable-next-line prefer-destructuring
    this.selectedBlock = this.blocks[0];
    // console.log(this.blocks);
  }

  showTransactions(block: Block) {
    // console.log(block);
    this.selectedBlock = block;
    return false;
  }

  selectedBlockHasTx() {
    if (this.selectedBlock) {
      return blockHasTx(this.selectedBlock);
    }
    return false;
  }

  isSelectedBlock(block: Block) {
    return this.selectedBlock === block;
  }

  getBlockNumber(block: Block) {
    return this.blocks.indexOf(block) + 1;
  }
}
