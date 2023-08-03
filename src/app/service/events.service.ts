import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient : HttpClient) { }

  private eventsApi = environment.baseUrl;

  getAllEvents() {
    return this.httpClient.get(`${this.eventsApi}/api/v1/users`)
  }

}
