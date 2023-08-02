import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/service/events.service';
import { Inquiries } from './../../model/inquiries.model';
import { CustomColors } from 'src/app/model/custom-colors.model';

@Component({
  selector: 'app-inquiry-details',
  templateUrl: './inquiry-details.component.html',
  styleUrls: ['./inquiry-details.component.css'],
})

export class InquiryDetailsComponent  implements OnInit {

  constructor(private eventService : EventsService) { }

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
    customColor1: '#85E2CD',
    customColor2: '#D0E6A5',
    customColor3: '#FEDE95',
    customColor4: '#F9897B',
    customColor5: '#CBACD8',
    customColor6: '#F4CEC5',
    customColor7: '#E79796',
    customColor8: '#FFC98B',
    customColor9: '#FEB183',
    customColor10:'#C5C19B',
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


}
