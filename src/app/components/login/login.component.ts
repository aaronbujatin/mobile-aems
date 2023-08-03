import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InquiryDetailsComponent } from '../inquiry-details/inquiry-details.component';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 
})
export class LoginComponent  implements OnInit {

  constructor(private router : Router, private navCtrl: NavController) { }

  ngOnInit() {}

  
   // This function is called when the user clicks the "Login" button.
   login() {
    // Assuming the login is successful, navigate to the tabs page.
    this.navCtrl.navigateRoot('/tabs/events');
  }

}
