import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { UserhomeComponent } from "./components/userhome/userhome.component";
import { BlockchainViewerComponent } from "./pages/blockchain-viewer/blockchain-viewer.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { CreateTransactionComponent } from "./pages/create-transaction/create-transaction.component";
import { PendingTransactionsComponent } from "./pages/pending-transactions/pending-transactions.component";
import { WalletBalanceComponent } from "./pages/wallet-balance/wallet-balance.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "user", component: UserhomeComponent },
  { path: "userprofile", component: BlockchainViewerComponent },
  { path: "settings", component: SettingsComponent },
  { path: "new/transaction", component: CreateTransactionComponent },
  { path: "new/transaction/pending", component: PendingTransactionsComponent },
  { path: "wallet/:address", component: WalletBalanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
