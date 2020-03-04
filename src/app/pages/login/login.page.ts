import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  matricule:string =""; 
  mdp:string=""; 
  constructor(private NavController:NavController,private userService:UsersService,public toastController: ToastController) { }

  ngOnInit() {
  }
  SignIn()
  { this.userService.loginUser(this.matricule,this.mdp).subscribe(data=>{
    let result :any = data ; 
    if(result.auth==false)
    {
      this.presentToast(); 
    }else if(result.auth==true && result.type!=1)
    {
      this.presentToast2(); 
    }else 
    { localStorage.setItem('token',result.token); 
      localStorage.setItem('type',result.type) ; 
      this.NavController.navigateRoot('mapbox'); 
    }
    console.log(result); 
  })
   
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Wrong Id or Password.',
      duration: 2000
    });
    toast.present();
  }

  async presentToast2() {
    const toast = await this.toastController.create({
      message: 'UNAUTHORIZED',
      duration: 2000
    });
    toast.present();
  }
}
