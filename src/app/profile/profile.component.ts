import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileImg = '';
  firstnameImg = '';
  lastnameImg = '';
  constructor() { }

  ngOnInit() {
    this.profileImg = 'assets/image/avatar.jpg';
    this.firstnameImg = 'assets/image/nichanan.png';
    this.lastnameImg = 'assets/image/poovanavirote.png';

  }

}
