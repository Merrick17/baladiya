import { BinService } from './../../bin.service';
import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addbin',
  templateUrl: './addbin.page.html',
  styleUrls: ['./addbin.page.scss'],
})
export class AddbinPage implements OnInit {
  Drivers=[]; 
  driverID=[]; 
  lng=0 
  alt=0 
  location=""; 
  weight:number=0; 
  //bins=[]
  constructor( private driverservice:UsersService,private binService:BinService) { }

  ngOnInit() {
    this.getAllDrivers(); 
  }
  addBin()
  {
    this.binService.addBin(this.location,this.weight,this.alt,this.lng).subscribe(data=>{
      let result:any=data; 
      console.log(result); 
    })
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
}
