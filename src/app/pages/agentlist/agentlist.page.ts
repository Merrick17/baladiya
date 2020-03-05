import { UsersService } from 'src/app/users.service';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-agentlist',
  templateUrl: './agentlist.page.html',
  styleUrls: ['./agentlist.page.scss'],
})
export class AgentlistPage implements OnInit {
  Agents:any=[]; 
  constructor(public actionSheetController: ActionSheetController, private userServ:UsersService) { }

  ngOnInit() {
    this.getAllDrivers(); 
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Manage Agent',
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

  getAllDrivers()
  {
    this.userServ.getAllUsers(0).subscribe(data=>{
      let result :any = data ; 
      this.Agents=result.result ; 
      console.log(this.Agents); 
    })
  }
}
