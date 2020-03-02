import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agentlogin',
  templateUrl: './agentlogin.page.html',
  styleUrls: ['./agentlogin.page.scss'],
})
export class AgentloginPage implements OnInit {

  constructor(private NavController:NavController) { }

  ngOnInit() {
  }
  SignIn()
  {
    this.NavController.navigateRoot('agentmain'); 
  }
}
