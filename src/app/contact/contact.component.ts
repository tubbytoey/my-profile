import { Component, OnInit } from '@angular/core';
import contact from './contact.json'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact: object[] = [];
  constructor() { }

  ngOnInit() {
    this.contact = contact;
  }

}
