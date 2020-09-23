import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'app-cryptodata',
  templateUrl: './cryptodata.component.html',
  styleUrls: ['./cryptodata.component.css']
})
export class CryptodataComponent implements OnInit {

    firstthree:any;
    
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  this.http.get('https://api.coingecko.com/api/v3/exchange_rates') 
    .subscribe(res => {  
      this.firstthree=res; 
    }); 
   
  } 
}

