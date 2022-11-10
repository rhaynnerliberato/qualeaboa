import { Component, Input, OnInit } from '@angular/core';
import { InstagramResponse } from '../models/responses/instagram-response.response';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() dados?: Array<InstagramResponse>;
  public urlInstagram = "https://www.instagram.com/";
  public urlProfile: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  openProfileInstagram(userName: any): void {
    this.urlProfile = this.urlInstagram + userName;
  }

}
