import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-agentlogin',
  templateUrl: './agentlogin.page.html',
  styleUrls: ['./agentlogin.page.scss'],
})
export class AgentloginPage implements OnInit {
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
    }else
    { localStorage.setItem('token',result.token); 
      localStorage.setItem('type',result.type) ; 
      this.NavController.navigateRoot('agentmain'); 
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

}
