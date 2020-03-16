import { Component, OnInit } from '@angular/core';
import { Movement } from 'src/app/Model/Movement';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { MovementServiceService } from 'src/app/Services/Movement/movement-service.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-list-movements',
  templateUrl: './list-movements.component.html',
  styleUrls: ['./list-movements.component.css']
})
export class ListMovementsComponent implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute , private movementService: MovementServiceService) { }
  movements: Movement[] = [];
  accountId: number;

  showMessage: boolean = false;
  message: string = "";
  alertType: string = "";

  goBack(){
    this.router.navigate(["viewAccount",this.accountId]);
  }

  addMovement(){
    this.router.navigate(["addMovement", this.accountId ]);
  }

  ngOnInit(): void {
    this.route
      .queryParams
      .subscribe(params => {
        this.showMessage = params["showMessage"];
        this.message = params["message"];
        this.alertType = "alert-"+params["alert"];
    });

    this.route.params.subscribe((params: Params)=> this.accountId = params['id']);
    this.movementService.getByAccount(this.accountId).subscribe(
      result => this.movements = result
    );
  }

}
