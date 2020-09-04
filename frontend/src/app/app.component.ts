import { Component, OnInit } from "@angular/core";
import { BlockchainService } from "app/services/blockchain.service";
import { UserService } from "./services/user.service";

declare var VANTA; 

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
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
  ngOnInit() {
  VANTA.NET({
  el: "#mainthing",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 800.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xc6fd9,
  points: 12.00
})
  }

  thereArePendingTransactions() {
    return this.blockchain.pendingTransactions.length > 0;
  }

  isUserLoggedIn() {
    console.log(this.userservice.loggedIn);
    return this.userservice.loggedIn;
  }
}
