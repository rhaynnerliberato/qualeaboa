import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ImagesResponse } from './componentes/models/responses/images-response.response';
import { InstagramResponse } from './componentes/models/responses/instagram-response.response';
import { ImagesService } from './services/images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'qualeaboa';
  //public images?: any;
  public showButton = false;
  private scrollHeight = 500;
  public dados: Array<InstagramResponse> = [];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private imgService: ImagesService,

  ) { }

  ngOnInit(): void {
    this.recuperarImagens();
  }

  recuperarImagens() : void {
    //this.images = this.imgService.getImages();

    this.imgService.listarMidiasInstagram().subscribe(
      response => {
        this.dados = response.data;

        console.log(this.dados);
      }
    );


  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffSet || scrollTop) > this.scrollHeight;
  }

  showTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

}
