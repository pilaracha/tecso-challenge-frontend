import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from 'src/app/environment';
import { Account } from 'src/app/Model/Account';
import { AccountType } from 'src/app/Model/AccountType';
import { Movement } from 'src/app/Model/Movement';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovementServiceService {

  constructor(private http: HttpClient, private router:Router) { }

  baseUrl: string = environment.baseUrl + "/movement"

  getByAccount(accountId: number){
    return this.http.get<Movement[]>(this.baseUrl+"/findAllByAccount/"+accountId).pipe(
      catchError(this.handleError)
    );
  }

  save(movement: Movement){
    return this.http.post(this.baseUrl+"/save",movement).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error) {
    return throwError(error);
  }


}
