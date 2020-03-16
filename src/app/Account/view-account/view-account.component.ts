import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Movement } from 'src/app/Model/Movement';
import { Account } from 'src/app/Model/Account';
import { AccountServiceService } from 'src/app/Services/AccountService/account-service.service';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute , private accountService: AccountServiceService) { }
  accountId: number;
  account: Account;

  goBack(){
    this.router.navigate(["listAccounts"])
  }

  listMovements(accountId : number){
    this.router.navigate(["listMovements", accountId])
  }

  addMovement(accountId : number){
    this.router.navigate(["addMovement", accountId ])
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=> this.accountId = params['id'])
    this.accountService.get(this.accountId).subscribe(
      result => this.account = result
    )

  }

}
