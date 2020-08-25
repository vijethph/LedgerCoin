import { Component, OnInit, Input } from "@angular/core";
import { BlockchainService } from "app/services/blockchain.service";

@Component({
  selector: "app-blockchain-viewer",
  templateUrl: "./blockchain-viewer.component.html",
  styleUrls: ["./blockchain-viewer.component.scss"],
})
export class BlockchainViewerComponent implements OnInit {
  public blocks = [];
  public selectedBlock = null;

  constructor(private blockchainService: BlockchainService) {
    this.blocks = blockchainService.blockchainInstance.chain;
    this.selectedBlock = this.blocks[0];
  }

  ngOnInit(): void {}

  showTransactions(block) {
    this.selectedBlock = block;
    return false;
  }

  blockHasTx(block) {
    return block.transactions.length > 0;
  }

  selectedBlockHasTx() {
    return this.blockHasTx(this.selectedBlock);
  }

  isSelectedBlock(block) {
    return this.selectedBlock === block;
  }

  getBlockNumber(block) {
    return this.blocks.indexOf(block) + 1;
  }
}
