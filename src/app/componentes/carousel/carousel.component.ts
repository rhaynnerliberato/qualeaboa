import { Component, Input, OnInit } from '@angular/core';
import { InstagramResponse } from '../models/responses/instagram-response.response';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() dados?: Array<InstagramResponse>;
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 5000;

  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
    if(this.autoSlide) {
      setInterval(() => {
        this.onNextClick();
      }, this.slideInterval
      );
    }
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if(this.selectedIndex === 0 && this.dados){
      this.selectedIndex = this.dados.length -1;
    }
    else {
      this.selectedIndex --;
    }
  }

  onNextClick(): void {
    if(this.dados && this.selectedIndex === this.dados.length - 1){
      this.selectedIndex = 0;
    }
    else {
      this.selectedIndex ++;
    }
  }
}
