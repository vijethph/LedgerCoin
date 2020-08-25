import { Component, OnInit } from "@angular/core";
import { BlockchainService } from "app/services/blockchain.service";
import { UserService } from "./services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "app";
  public blockchain;
  public userservice;

  constructor(
    private userService: UserService,
    private blockchainService: BlockchainService
  ) {
    this.blockchain = blockchainService.blockchainInstance;
    this.userservice = userService;
  }
  ngOnInit() {}

  thereArePendingTransactions() {
    return this.blockchain.pendingTransactions.length > 0;
  }

  isUserLoggedIn() {
    console.log(this.userservice.loggedIn);
    return this.userservice.loggedIn;
  }
}
