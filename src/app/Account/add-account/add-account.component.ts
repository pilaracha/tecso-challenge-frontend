import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountTypeServiceService } from 'src/app/Services/AccountType/account-type-service.service';
import { AccountType } from 'src/app/Model/AccountType';
import { AccountServiceService } from 'src/app/Services/AccountService/account-service.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  constructor(private router:Router, private accountTypeService: AccountTypeServiceService, private accountService: AccountServiceService) { }
  accountTypes: AccountType[] = [];
  accountTypeSelected: AccountType = null;
  showMessage: boolean = false;
  message: string = "";
  alert: string = "";
  error: string = "";
  cancel(){
    this.router.navigate(["listAccounts"])
  }

  save(){
    if(this.validateFields()){
      this.showMessage = true;
      this.accountService.save(this.accountTypeSelected).subscribe(
        result =>  {  
          this.message = "Account created successfully"
          this.alert= "success"
          this.router.navigate(["listAccounts"] , { queryParams: { 'showMessage': this.showMessage , 'message': this.message , 'alert': this.alert} })
          }
      ),
      error => {
        this.message = "The account could not be created"
        this.alert = "danger"
        this.router.navigate(["listAccounts"] , { queryParams: { 'showMessage': this.showMessage , 'message': this.message , 'alert': this.alert} })
      }
    }else{
      this.error = "To create an account you must choose the type"
    }
    
  
  }

  validateFields(){
    return this.accountTypeSelected
  }

  ngOnInit(): void {

    this.accountTypeService.getAll().subscribe(
      result => this.accountTypes = result
    );

  }

}
