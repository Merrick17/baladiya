import { UsersService } from 'src/app/users.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';



@Component({
  selector: 'app-driverlist',
  templateUrl: './driverlist.page.html',
  styleUrls: ['./driverlist.page.scss'],
})
export class DriverlistPage implements OnInit {
Drivers :any[]=[]; 
  constructor(public actionSheetController: ActionSheetController,private usersServ:UsersService) { }

  ngOnInit() {
    this.getAllDrivers(); 
  }
  async presentActionSheet(id) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Manage Driver',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
          //this.usersServ.deleteUser()
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
    this.usersServ.getAllUsers(1).subscribe(data=>{
      let result :any = data ; 
      this.Drivers=result.result ; 
      console.log(result); 
    })
  }
}
