import { Component, OnInit } from '@angular/core';
import experiences from './experiences.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: object[];
  constructor() {}

  ngOnInit() {
    this.experiences = experiences;
  }

  renderLinkOrPlainText(obj: any) {
    if (obj.link) {
      return obj.text.replace(obj.link, `<a href="${obj.to}" target="_blank">${obj.link}</a>`);
    }
    return obj.text;
  }
}