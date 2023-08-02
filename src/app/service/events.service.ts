import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient : HttpClient) { }

  private eventsApi = environment.baseUrl

  getAllEvents() {
    return this.httpClient.get(`${this.eventsApi}/api/v1/users`)
  }

}
