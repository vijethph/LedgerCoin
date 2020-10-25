import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-cryptodata',
  templateUrl: './cryptodata.component.html',
  styleUrls: ['./cryptodata.component.css']
})
export class CryptodataComponent implements OnInit {
    //username: String = "";
    firstthree:any;
    
  constructor(private http : HttpClient,private _user: UserService, private _router: Router) { 
    this._user.user().subscribe(
      (data) => { },
      (error) => this._router.navigate(["/login"])
    );
  }

  ngOnInit(): void {
  
  this.http.get('https://api.coingecko.com/api/v3/exchange_rates') 
    .subscribe(res => {  
      this.firstthree=res; 
    }); 
   
  }
  
  
}

