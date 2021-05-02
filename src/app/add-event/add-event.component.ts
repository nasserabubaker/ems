import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
})
export class AddEventComponent implements OnInit {
  addEventForm: FormGroup;

  constructor(private _fromBuilder: FormBuilder, private _http: HttpClient) {}

  ngOnInit(): void {
    this.addEventForm = this._fromBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
    });
  }

  onSave(): void {
    let eventName = this.addEventForm.get('name').value;
    let eventLocation = this.addEventForm.get('location').value;

    let body = {
      name: eventName,
      location: eventLocation,
    };

    this._http
      .post('https://thefinessefirmeventsample.herokuapp.com/api/events', body)
      .subscribe((x) => console.log(x));
  }
}
