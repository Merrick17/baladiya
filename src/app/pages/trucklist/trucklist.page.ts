import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trucklist',
  templateUrl: './trucklist.page.html',
  styleUrls: ['./trucklist.page.scss'],
})
export class TrucklistPage implements OnInit {
  actionSheetController: any;
  ngOnInit() {
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
        text: 'edit',
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
