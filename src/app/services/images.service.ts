import { Injectable, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { TokenInstagram } from './tokens/token-instagram';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private urlBase = `https://graph.instagram.com/me/media?`;
  private camposRetornados = `media_url,media_type,caption,permalink,timestemp,username,timestamp`;
  private tokenInstagram = new TokenInstagram();

   private urlMidias = `${this.urlBase}access_token=${this.tokenInstagram.token}&fields=${this.camposRetornados}`;

  constructor(
    private http: HttpClient,
  ) { }

  listarMidiasInstagram(): Observable<any>{
    return this.http.get<any>(this.urlMidias);
  }


}
