import { AddAccountService } from './add-account.service';
import { AccountsBalanceService } from './accounts-balance.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AccountsComponentComponent } from './accounts-component/accounts-component.component';
import { AddAccountFormComponent } from './add-account-form/add-account-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponentComponent,
    AddAccountFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [AccountsBalanceService,AddAccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
