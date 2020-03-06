import { UsersService } from 'src/app/users.service';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { TruckService } from './../../truck.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trucklist',
  templateUrl: './trucklist.page.html',
  styleUrls: ['./trucklist.page.scss'],
})
export class TrucklistPage implements OnInit {
  trucks=[]; 
  drivers=[]; 
  driverInputs=[];
  constructor( private truckServ:TruckService,private driverService:UsersService , private actionSheetController: ActionSheetController,private alertController:AlertController)
  {
    
  }
  
  ngOnInit() {
    this.truckServ.getAllTrucks().subscribe(data=>{
      let result:any=data ; 
      this.trucks=result.result ; 
      console.log(result.result); 
      this.driverService.getAllUsers(1).subscribe(data=>{
        let result:any=data ; 
        this.drivers=result.result ; 
        this.drivers.forEach(elm=>{
        let val=  {
            name: 'driver',
            type: 'radio',
            label: elm.name+ elm.firstname,
            value: elm.idusers,
            checked: false
          } ; 
          this.driverInputs.push(val); 
        })
      })
      
    })
  }
  
  async presentActionSheet(truckid) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Manage Driver',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
          this.truckServ.deleteTruck(truckid).subscribe(data=>{
            let res :any = data ; 
            if(res.affectedRows!=null)
            {
              this.truckServ.getAllTrucks().subscribe(data=>{
                let result:any=data ; 
                this.trucks=result.result ; 
                console.log(result.result)
                
              })
            }
          })
        }
      }, {
        text: 'Assign Driver',
        icon: 'create-outline',
        handler: () => {
       this.presentAlertRadio(truckid)
        }
      
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  async presentAlertRadio(truck) {
    const alert = await this.alertController.create({
      header: 'Drivers',
      inputs: this.driverInputs,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
           
          }
        }, {
          text: 'Ok',
          handler: (driver) => {
            console.log('Confirm Ok');
            console.log(driver) ;
            this.truckServ.assignTruck(truck,driver).subscribe(data=>{
              let res :any = data ; 
            
              if(res.affectedRows!=null)
              {
                this.truckServ.getAllTrucks().subscribe(data=>{
                  this.trucks=[]; 
                  let result:any =data ; 
                  this.trucks=result.result; 
                }); 
              }
            })
          }
        }
      ]
    });

    await alert.present();
  }
}
