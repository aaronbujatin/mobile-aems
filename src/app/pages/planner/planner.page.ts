import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonModal, NavController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Planner } from 'src/app/model/planner.model';
import { PlannerService } from 'src/app/service/planner.service';
@Component({
  selector: 'app-planner',
  templateUrl: './planner.page.html',
  styleUrls: ['./planner.page.scss'],
})
export class PlannerPage implements OnInit {

  constructor(private navCtrl: NavController, private plannerService : PlannerService) { }

  ngOnInit() {
    this.getAllPlanner()
  }

  goBack() {
    return this.navCtrl.back();
  }

  @ViewChild(IonModal) modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  @ViewChild('plannerForm') plannerForm!: NgForm;
  confirm() {
    this.plannerService.savePlanner(this.planner).subscribe(
      (response : any) => {
        this.plannerForm.resetForm()
        this.modal.dismiss(null, 'cancel');
        console.log(response);
      }, 
      (error) => {
        console.log(this.planner);
        console.log(error);
        
      }
    )
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }


  planner : Planner = new Planner;
  planners! : Planner[];

  public onSubmit(){
    this.plannerService.savePlanner(this.planner).subscribe(
      (response : any) => {
        console.log(this.planner);
        
        console.log(response);
      }, 
      (error) => {
        console.log(error);
        
      }
    )
  }

  public getAllPlanner(){
    this.plannerService.getAllPlanner().subscribe(
      (response : any) => {
        this.planners = response
        console.log(response);
        
      }
    )
  }

  selectedDateTime!: string;



}
