import { Component, OnInit } from '@angular/core';
import skills from './skills.json';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  skills: object[] = [];
  constructor() {}

  ngOnInit() {
    this.skills = skills;
  }

}
