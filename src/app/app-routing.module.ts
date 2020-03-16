import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ListAccountsComponent } from './Account/list-accounts/list-accounts.component';
import { AddAccountComponent } from './Account/add-account/add-account.component';
import { ViewAccountComponent } from './Account/view-account/view-account.component';
import { AddMovementComponent } from './Movement/add-movement/add-movement.component';
import { ListMovementsComponent } from './Movement/list-movements/list-movements.component';



const routes: Routes = [
  {path: 'listAccounts', component: ListAccountsComponent},
  {path: 'addAccount', component: AddAccountComponent},
  {path: 'viewAccount/:id', component: ViewAccountComponent},
  {path: 'addMovement/:account', component: AddMovementComponent},
  {path: 'listMovements/:id', component: ListMovementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
