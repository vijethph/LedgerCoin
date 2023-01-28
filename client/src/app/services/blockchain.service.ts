import { Injectable } from '@angular/core';
import { ec } from 'elliptic';
import { Blockchain } from './Blockchain';
import { EC, Transaction } from './Transaction';

@Injectable({
  providedIn: 'root',
})
export class BlockchainService {
  public blockchainInstance = new Blockchain();

  public walletKeys: Array<IWalletKey> = [];

  constructor() {
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingTransactions('Ethan Hunt');
    this.generateWalletKeys();
  }

  minePendingTransactions() {
    this.blockchainInstance.minePendingTransactions(
      this.walletKeys[0].publicKey
    );
  }

  addressIsFromCurrentUser(address: string) {
    return address === this.walletKeys[0].publicKey;
  }

  generateWalletKeys() {
    // eslint-disable-next-line new-cap
    const key = EC.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex'),
    });

    // console.log(this.walletKeys);
  }

  getPendingTransactions() {
    return this.blockchainInstance.pendingTransactions;
  }

  addTransaction(tx: Transaction) {
    this.blockchainInstance.addTransaction(tx);
  }
}

export interface IWalletKey {
  keyObj: ec.KeyPair;
  publicKey: string;
  privateKey: string;
}
