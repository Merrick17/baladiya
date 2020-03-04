import { BinService } from './../../bin.service';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-binlist',
  templateUrl: './binlist.page.html',
  styleUrls: ['./binlist.page.scss'],
})
export class BinlistPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController, private binServ:BinService) { }
  bins:any=[]; 
  ngOnInit() {
    this.binServ.getAllBin().subscribe(data=>{
      let result:any =data ; 
      this.bins=result.result; 
    })
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Manage Bin',
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
