import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/app/environment';
import { Account } from 'src/app/Model/Account';
import { AccountType } from 'src/app/Model/AccountType';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(private http: HttpClient) { }

  baseUrl: string = environment.baseUrl + "/account"

  getAll(){
    return this.http.get<Account[]>(this.baseUrl+"/findAll").pipe(
      catchError(this.handleError)
    );
  }

  get(id:number){
    return this.http.get<Account>(this.baseUrl+"/get/"+id).pipe(
      catchError(this.handleError)
    );
  }

  save(accountType: AccountType){
    return this.http.post(this.baseUrl+"/save",accountType).pipe(
      catchError(this.handleError)
    );
  }

  delete(account: Account){
    return this.http.post(this.baseUrl+"/delete",account).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error) {
    return throwError(error);
  }
}
