import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ImagesResponse } from '../componentes/models/responses/images-response.response';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private urlImages = "https://pixabay.com/pt/images/search/api/";

  constructor(
    //private http: HttpClient
  ) { }


  getImages(): any {

    //this.http.get<ImagesResponse[]>(this.urlImages);

    let mockImages = [
      {
        imageSrc:
          'https://www.visiteosusa.com.br/sites/default/files/styles/16_9_1280x720/public/images/hero_media_image/2016-11/Hero_San%20Diego%20Skyline_John%20Bahu.jpg?h=3767f04f&itok=R32qq4Na',
        imageAlt: 'nature1'
      },
      {
        imageSrc:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zenA-rBn64Sr_RL2mBRc7nS0V70bi6QVPGtb3ROG_I8s4sPE4W4VlCDxuJOwHDWcdGM&usqp=CAU',
        imageAlt: 'nature2'
      },
      {
        imageSrc:
          'https://lajollamom.com/wp-content/uploads/2022/09/downtown-san-diego-bay.jpg',
        imageAlt: 'person1'
      },
      {
        imageSrc:
          'https://media.gettyimages.com/photos/downtown-san-diego-skyline-aerial-picture-id855990776?s=612x612',
        imageAlt: 'person2'
      },
      {
        imageSrc:
          'https://www.visiteosusa.com.br/sites/default/files/styles/16_9_1280x720/public/images/hero_media_image/2016-11/Hero_San%20Diego%20Skyline_John%20Bahu.jpg?h=3767f04f&itok=R32qq4Na',
        imageAlt: 'nature1'
      },
      {
        imageSrc:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zenA-rBn64Sr_RL2mBRc7nS0V70bi6QVPGtb3ROG_I8s4sPE4W4VlCDxuJOwHDWcdGM&usqp=CAU',
        imageAlt: 'nature2'
      },
      {
        imageSrc:
          'https://lajollamom.com/wp-content/uploads/2022/09/downtown-san-diego-bay.jpg',
        imageAlt: 'person1'
      },
      {
        imageSrc:
          'https://media.gettyimages.com/photos/downtown-san-diego-skyline-aerial-picture-id855990776?s=612x612',
        imageAlt: 'person2'
      },
      {
        imageSrc:
          'https://www.visiteosusa.com.br/sites/default/files/styles/16_9_1280x720/public/images/hero_media_image/2016-11/Hero_San%20Diego%20Skyline_John%20Bahu.jpg?h=3767f04f&itok=R32qq4Na',
        imageAlt: 'nature1'
      },
      {
        imageSrc:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zenA-rBn64Sr_RL2mBRc7nS0V70bi6QVPGtb3ROG_I8s4sPE4W4VlCDxuJOwHDWcdGM&usqp=CAU',
        imageAlt: 'nature2'
      },
      {
        imageSrc:
          'https://lajollamom.com/wp-content/uploads/2022/09/downtown-san-diego-bay.jpg',
        imageAlt: 'person1'
      },
      {
        imageSrc:
          'https://media.gettyimages.com/photos/downtown-san-diego-skyline-aerial-picture-id855990776?s=612x612',
        imageAlt: 'person2'
      },
      {
        imageSrc:
          'https://www.visiteosusa.com.br/sites/default/files/styles/16_9_1280x720/public/images/hero_media_image/2016-11/Hero_San%20Diego%20Skyline_John%20Bahu.jpg?h=3767f04f&itok=R32qq4Na',
        imageAlt: 'nature1'
      },
      {
        imageSrc:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zenA-rBn64Sr_RL2mBRc7nS0V70bi6QVPGtb3ROG_I8s4sPE4W4VlCDxuJOwHDWcdGM&usqp=CAU',
        imageAlt: 'nature2'
      },
      {
        imageSrc:
          'https://lajollamom.com/wp-content/uploads/2022/09/downtown-san-diego-bay.jpg',
        imageAlt: 'person1'
      },
      {
        imageSrc:
          'https://media.gettyimages.com/photos/downtown-san-diego-skyline-aerial-picture-id855990776?s=612x612',
        imageAlt: 'person2'
      },
      {
        imageSrc:
          'https://www.visiteosusa.com.br/sites/default/files/styles/16_9_1280x720/public/images/hero_media_image/2016-11/Hero_San%20Diego%20Skyline_John%20Bahu.jpg?h=3767f04f&itok=R32qq4Na',
        imageAlt: 'nature1'
      },
      {
        imageSrc:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zenA-rBn64Sr_RL2mBRc7nS0V70bi6QVPGtb3ROG_I8s4sPE4W4VlCDxuJOwHDWcdGM&usqp=CAU',
        imageAlt: 'nature2'
      },
      {
        imageSrc:
          'https://lajollamom.com/wp-content/uploads/2022/09/downtown-san-diego-bay.jpg',
        imageAlt: 'person1'
      },
      {
        imageSrc:
          'https://media.gettyimages.com/photos/downtown-san-diego-skyline-aerial-picture-id855990776?s=612x612',
        imageAlt: 'person2'
      },
    ]

    return mockImages;
  }

}
