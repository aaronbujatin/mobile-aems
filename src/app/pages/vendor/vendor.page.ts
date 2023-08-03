import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.page.html',
  styleUrls: ['./vendor.page.scss'],
})
export class VendorPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  
  goBack(){
    return this.navCtrl.back();
  }

}
