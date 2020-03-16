import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tecso-challenge';

  constructor(private router:Router){}

  listAccounts(){
    this.router.navigate(["listAccounts"]);
  }

  addAccount(){
    this.router.navigate(["addAccount"]);
  }
}
