import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  eventsList: Array<any> = [];
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http
      .get('https://thefinessefirmeventsample.herokuapp.com/api/events')
      .subscribe((response: any) => {
        this.eventsList = response.data;
      });
  }
}
