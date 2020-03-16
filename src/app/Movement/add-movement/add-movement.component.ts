import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MovementServiceService } from 'src/app/Services/Movement/movement-service.service';
import { Movement } from 'src/app/Model/Movement';
import { AccountServiceService } from 'src/app/Services/AccountService/account-service.service';

@Component({
  selector: 'app-add-movement',
  templateUrl: './add-movement.component.html',
  styleUrls: ['./add-movement.component.css']
})
export class AddMovementComponent implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute , private movementService: MovementServiceService, private accountService: AccountServiceService) { }
  movement: Movement = new Movement();
  showMessage: boolean = false;
  message: string = "";
  alert: string = "";
  error: string = "";

  cancel(){

  }

  save(){
    if(this.validateFields()){
      this.showMessage = true;
      this.movementService.save(this.movement).subscribe(
      result => {
          this.message = "Movement added successfully"
          this.alert= "success"
          this.router.navigate(["listMovements", this.movement.account.id] , { queryParams: { 'showMessage': this.showMessage , 'message': this.message , 'alert': this.alert} })
      },
      error => {
        this.message = "The movement could not be added because its amount is greater than allowed or you don't have enough money"
        this.alert = "danger"
        this.router.navigate(["listMovements", this.movement.account.id] , { queryParams: { 'showMessage': this.showMessage , 'message': this.message , 'alert': this.alert} })
      })
    }else{
      this.error = "To add a movement you must complete all the data"
    }
    
    
  }

  validateFields(){
    return this.movement.movementAmount && this.movement.movementDescription && this.movement.movementType
  }

  ngOnInit(): void {  
    this.route.params.subscribe(
      (params: Params)=> this.accountService.get(params['account']).subscribe(
        result => this.movement.account = result
      )
    )
  }

}
