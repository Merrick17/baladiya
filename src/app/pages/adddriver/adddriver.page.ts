import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddriver',
  templateUrl: './adddriver.page.html',
  styleUrls: ['./adddriver.page.scss'],
})
export class AdddriverPage implements OnInit {
  name:string=""; 
  firstname:string=""; 
  phone:number=0;
  matricule:string=""; 
  type=1;  
  password=""; 
  constructor(private navCtrl:NavController,private router:Router , private userSer: UsersService, private toastController:ToastController) { }

  ngOnInit() {
  }


  addUser()
  {
    this.userSer.addUser(this.name,this.firstname,this.password,this.matricule,this.type,this.phone).subscribe(data=>{

      let result:any = data ; 
      if(result.affectedRows!=null)
      {
        this.presentToast(); 
        this.navCtrl.navigateBack('driverlist'); 
      }
      console.log(data); 
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Driver Added.',
      duration: 2000
    });
    toast.present();
  }

  getBack()
  {
    this.navCtrl.navigateBack('driverlist'); 
  }

}
