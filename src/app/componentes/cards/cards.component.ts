import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() images?: any;
  public imagesCard: any;


  constructor() { }

  ngOnInit(): void {
    if(this.images){
      this.imagesCard = this.images;
    }
  }

}
