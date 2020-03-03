import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddriver',
  templateUrl: './adddriver.page.html',
  styleUrls: ['./adddriver.page.scss'],
})
export class AdddriverPage implements OnInit {

  constructor(private navCtrlrl:NavController,private router:Router) { }

  ngOnInit() {
  }


}
