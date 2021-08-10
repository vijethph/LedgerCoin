import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ParticlesModule } from 'ngx-particle';

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { UserhomeComponent } from "./components/userhome/userhome.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { UserService } from "./services/user.service";
import { HttpClientModule } from "@angular/common/http";
import { BlockViewComponent } from "./components/block-view/block-view.component";
import { BlockchainViewerComponent } from "./pages/blockchain-viewer/blockchain-viewer.component";

import { BlockchainService } from "./services/blockchain.service";
import { SettingsComponent } from "./pages/settings/settings.component";
import { TransactionsTableComponent } from "./components/transactions-table/transactions-table.component";
import { CreateTransactionComponent } from "./pages/create-transaction/create-transaction.component";
import { PendingTransactionsComponent } from "./pages/pending-transactions/pending-transactions.component";
import { WalletBalanceComponent } from "./pages/wallet-balance/wallet-balance.component";
import { CryptodataComponent } from './components/cryptodata/cryptodata.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    BlockViewComponent,
    BlockchainViewerComponent,
    SettingsComponent,
    TransactionsTableComponent,
    CreateTransactionComponent,
    PendingTransactionsComponent,
    WalletBalanceComponent,
    CryptodataComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ParticlesModule,
  ],
  providers: [UserService, BlockchainService],
  bootstrap: [AppComponent],
})
export class AppModule {}
