import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/app/environment';
import { AccountType } from 'src/app/Model/AccountType';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountTypeServiceService {

  constructor(private http: HttpClient) { }

  baseUrl: string = environment.baseUrl + "/accountType"

  getAll(){
    return this.http.get<AccountType[]>(this.baseUrl+"/findAll").pipe(
      catchError(this.handleError)
    );
  }

  handleError(error) {
    return throwError(error);
  }
  
}
