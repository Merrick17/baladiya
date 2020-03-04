import { ActionSheetController } from '@ionic/angular';
import { TruckService } from './../../truck.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trucklist',
  templateUrl: './trucklist.page.html',
  styleUrls: ['./trucklist.page.scss'],
})
export class TrucklistPage implements OnInit {
  trucks=[]; 
  
  constructor( private truckServ:TruckService,private actionSheetController: ActionSheetController)
  {
    
  }
  
  ngOnInit() {
    this.truckServ.getAllTrucks().subscribe(data=>{
      let result:any=data ; 
      this.trucks=result.result ; 
      console.log(result.result)
      
    })
  }
  
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Manage Driver',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Assign Driver',
        icon: 'create-outline',
        handler: () => {
          console.log('Share clicked');
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
 
}
