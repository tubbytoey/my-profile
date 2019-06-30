import { Component, OnInit } from '@angular/core';
import experiences from '../experience/experiences.json';
import skills from '../skill/skills.json';
import contact from '../contact/contact.json';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileImg = '';
  firstnameImg = '';
  lastnameImg = '';
  experiences: object[];
  skills: object[];
  contact: object[] = [];


  constructor() { }

  ngOnInit() {
    this.profileImg = 'assets/image/avatar.jpg';
    this.firstnameImg = 'assets/image/nichanan.png';
    this.lastnameImg = 'assets/image/poovanavirote.png';
    this.experiences = experiences;
    this.skills = skills;
    this.contact = contact;

  }

  renderLinkOrPlainText(obj: any) {
    if (obj.link) {
      return obj.text.replace(obj.link, `<a href="${obj.to}" target="_blank">${obj.link}</a>`);
    }
    return obj.text;
  }


}
