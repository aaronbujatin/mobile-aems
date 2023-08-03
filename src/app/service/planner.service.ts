import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Planner } from '../model/planner.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PlannerService {

  constructor(private httpClient : HttpClient) { }

  private baseUrl = environment.baseUrl;
  private testApi = "http://localhost:8080"

  public savePlanner(planner : Planner){
    return this.httpClient.post(`${this.baseUrl}/api/v1/planner`, planner);
  }

  public getAllPlanner() {
    return this.httpClient.get(`${this.baseUrl}/api/v1/planner`)
  }

}
