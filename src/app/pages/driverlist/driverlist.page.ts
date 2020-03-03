import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-driverlist',
  templateUrl: './driverlist.page.html',
  styleUrls: ['./driverlist.page.scss'],
})
export class DriverlistPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }


 
}
