import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

export interface CryptoData {
  rates?: { [key: string]: Rate };
}

export interface Rate {
  name?: string;
  unit?: string;
  value?: number;
  type?: Type;
}

export type Type = 'fiat' | 'crypto' | 'commodity';

@Component({
  selector: 'app-cryptodata',
  templateUrl: './cryptodata.component.html',
  styleUrls: ['./cryptodata.component.scss'],
})
export class CryptodataComponent implements OnInit {
  firstthree!: CryptoData;

  constructor(
    private http: HttpClient,
    private _user: UserService,
    private _router: Router
  ) {
    this._user.user().subscribe(
      (data) => {},
      (error) => this._router.navigate(['/login'])
    );
  }

  ngOnInit(): void {
    this.http
      .get('https://api.coingecko.com/api/v3/exchange_rates')
      .subscribe((res) => {
        this.firstthree = res;
      });
  }
}
