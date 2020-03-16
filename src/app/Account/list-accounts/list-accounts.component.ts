import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmationDialogService } from 'src/app/ConfirmationDialog/confirmation-dialog.service';
import { AccountServiceService } from 'src/app/Services/AccountService/account-service.service';
import { Account } from 'src/app/Model/Account';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})
export class ListAccountsComponent implements OnInit {

  constructor(private router:Router, private confirmationDialogService: ConfirmationDialogService, private accountService: AccountServiceService, private route: ActivatedRoute ){}
  myAccounts: Account[] = [];
  showMessage: boolean = false;
  message: string = "";
  alertType: string = "";

  deleteAccount(account: Account){
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete the account ?')
    .then((confirmed) => this.accountService.delete(account).subscribe(
      result => {             
        this.accountService.getAll().subscribe(
          result => this.myAccounts = result
        );
        this.message = "The account was successfully deleted";
        this.showMessage = true
        this.alertType = "alert-success"

    },
    error => { 
      this.message = "The account could not be deleted because it has associated movements"; 
      this.showMessage = true
      this.alertType = "alert-danger"
     })
    )

  }

  viewAccount(id:string){
    this.router.navigate(["viewAccount",id])
  }

  ngOnInit(): void {

    this.route
      .queryParams
      .subscribe(params => {
        this.showMessage = params["showMessage"]
        this.message = params["message"]
        this.alertType = "alert-"+params["alert"]
    });

    this.accountService.getAll().subscribe(
      result => this.myAccounts = result
    );

  }

}
