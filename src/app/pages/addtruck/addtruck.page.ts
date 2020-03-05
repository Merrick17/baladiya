import { NavController } from '@ionic/angular';
import { TruckService } from './../../truck.service';
import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtruck',
  templateUrl: './addtruck.page.html',
  styleUrls: ['./addtruck.page.scss'],
})
export class AddtruckPage implements OnInit {

  driverID=""; 
  weight=0; 
  matricule=""; 
  Drivers=[]; 
  constructor(private driverservice : UsersService, private truckService:TruckService, private NavController:NavController) { }

  ngOnInit() {
    this.getAllDrivers(); 
  }
  getAllDrivers()
  {
    this.driverservice.getAllUsers(1).subscribe(data=>{
      let result :any = data ; 
      this.Drivers=result.result ; 
      console.log(result); 
      this.driverID=this.Drivers[0].idusers ; 
    })
  }

  addTruck()
  {
    this.truckService.addTruck(this.matricule,this.weight,this.driverID).subscribe(data =>{
      let result:any = data ;
      if(result.affectedRows!=null)
      {
        this.NavController.navigateBack('/trucklist')
      }
      console.log(result); 
    });
  }
}
