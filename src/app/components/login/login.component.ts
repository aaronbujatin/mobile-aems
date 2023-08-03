import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InquiryDetailsComponent } from '../inquiry-details/inquiry-details.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 
})
export class LoginComponent  implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {}

  
  onClick() {
    console.log("Login button clicked");

    // this.router.navigate(['/inquiry']);
  }

  component = InquiryDetailsComponent;

  

  navigate(){
    this.router.navigate(['/tabs/events'])
  }


}
