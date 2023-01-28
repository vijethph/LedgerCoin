import { Component, Input } from '@angular/core';
import { Block } from 'src/app/services/Block';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-block-view',
  templateUrl: './block-view.component.html',
  styleUrls: ['./block-view.component.scss'],
})
export class BlockViewComponent {
  @Input()
  public block!: Block;

  @Input()
  public selectedBlock!: Block;

  private blocksInChain;

  constructor(private blockchainService: BlockchainService) {
    this.blocksInChain = blockchainService.blockchainInstance.chain;
  }

  blockHasTx() {
    return this.block.transactions.length > 0;
  }

  isSelectedBlock() {
    return this.block === this.selectedBlock;
  }

  getBlockNumber() {
    return this.blocksInChain.indexOf(this.block) + 1;
  }
}
