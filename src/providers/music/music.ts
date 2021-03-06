import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MusicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const API: string = "http://orangevalleycaa.org/api/music";
@Injectable()
export class MusicProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MusicProvider Provider');
  }

  getMusic () {
    return this.http.get(API);
    //.map(response => response.json());
  }

  getOneSong () {
    let oneSongUrl = API;
    return this.http.get(oneSongUrl);
  }

}
