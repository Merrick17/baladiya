import { UsersService } from 'src/app/users.service';
import { BinService } from './../../bin.service';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-binlist',
  templateUrl: './binlist.page.html',
  styleUrls: ['./binlist.page.scss'],
})
export class BinlistPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController,private driverService:UsersService, private binServ:BinService,private  alertController :AlertController) { }
  bins:any=[]; 
  drivers:any=[]; 
  driverInputs=[]; 
  ngOnInit() {
    this.binServ.getAllBin().subscribe(data=>{
      let result:any =data ; 
      this.bins=result.result; 
    }); 
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
  }
  async presentActionSheet(binID) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Manage Bin',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.binServ.deletebin(binID).subscribe(data=>{
            let result:any=data ; 
            if(result.affectedRows!=null)
            {
              this.binServ.getAllBin().subscribe(data=>{
                this.bins=[]; 
                let result:any =data ; 
                this.bins=result.result; 
              }); 
            }
            console.log(result); 
          })
          console.log('Delete clicked');
        }
      }, {
        text: 'Assign Bin',
        icon: 'create-outline',
        handler: () => {
          this.presentAlertRadio(binID); 
          console.log('Share clicked');
        }
      
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          //console.log(driver.value); 
        }
      }]
    });
    await actionSheet.present();
  }


  async presentAlertRadio(binid) {
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
            this.binServ.assignBin(binid,driver).subscribe(data=>{
              let res :any = data ; 
            
              if(res.affectedRows!=null)
              {
                this.binServ.getAllBin().subscribe(data=>{
                  this.bins=[]; 
                  let result:any =data ; 
                  this.bins=result.result; 
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
