export class InstagramResponse {

  public caption?: string;
  public id?: string;
  public media_type?: string;
  public media_url?: string;
  public permalink?: string;
  public username?: string;
  public timestamp?: string;

  constructor(params: Partial<InstagramResponse>){

    this.caption = params.caption;
    this.id = params.id;
    this.media_type = params.media_type;
    this.media_url = params.media_url;
    this.permalink = params.permalink;
    this.username = params.username;
    this.timestamp = params.timestamp;
  }

}
