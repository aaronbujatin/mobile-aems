import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CustomColors } from 'src/app/model/custom-colors.model';
import { Inquiries } from 'src/app/model/inquiries.model';
import { EventsService } from 'src/app/service/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  constructor(private eventService : EventsService, private navCtrl : NavController) { }

  ngOnInit() {
    this.getAllEvents()
 
  }

  inquiries! : Inquiries[];

  public getAllEvents(){
    return this.eventService.getAllEvents().subscribe(
      (response : any) => {
        this.inquiries = response
        console.log(response);
      },
      (error) => {
        console.log(error);
        
      }
    );
  }

  customColors: CustomColors = {
    customColor1: '#A19AFD',
    customColor2: '#FFCE65',
    customColor3: '#9ACF59',
    customColor4: '#FF8F7D',
    
  };

  assignRandomColor(data: any[]) {
    data.forEach((item) => {
      const randomColor = Object.keys(this.customColors)[
        Math.floor(Math.random() * Object.keys(this.customColors).length)
      ];
      item['color'] = randomColor;
    });
  }

  randomBackgroundColor(){
    const colorsArray = Object.values(this.customColors);
    const randomColorIndex = Math.floor(Math.random() * colorsArray.length);
    return colorsArray[randomColorIndex];
  }

  goBack(){
    return this.navCtrl.back();
  }


}
