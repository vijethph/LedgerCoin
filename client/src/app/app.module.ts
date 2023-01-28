// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { BlockViewComponent } from './components/block-view/block-view.component';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';
import { CryptodataComponent } from './components/cryptodata/cryptodata.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './components/register/register.component';
import { TransactionsTableComponent } from './components/transactions-table/transactions-table.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';
import { PendingTransactionsComponent } from './pages/pending-transactions/pending-transactions.component';
import { WalletBalanceComponent } from './pages/wallet-balance/wallet-balance.component';

// services
import { UserService } from './services/user.service';
import { BlockchainService } from './services/blockchain.service';

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
  ],
  providers: [UserService, BlockchainService],
  bootstrap: [AppComponent],
})
export class AppModule {}
