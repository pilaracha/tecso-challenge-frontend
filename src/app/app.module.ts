import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListAccountsComponent } from './Account/list-accounts/list-accounts.component';
import { AddAccountComponent } from './Account/add-account/add-account.component';
import { ViewAccountComponent } from './Account/view-account/view-account.component';

import { AccountServiceService } from './Services/AccountService/account-service.service';
import { ConfirmationDialogService } from './ConfirmationDialog/confirmation-dialog.service';
import { ConfirmationDialogComponent } from './ConfirmationDialog/confirmation-dialog.component';
import { ListMovementsComponent } from './Movement/list-movements/list-movements.component';
import { AddMovementComponent } from './Movement/add-movement/add-movement.component';
import { AccountTypeServiceService } from './Services/AccountType/account-type-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListAccountsComponent,
    AddAccountComponent,
    ViewAccountComponent,
    ConfirmationDialogComponent,
    ListMovementsComponent,
    AddMovementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AccountServiceService, ConfirmationDialogService, AccountTypeServiceService],
  entryComponents: [ ConfirmationDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
