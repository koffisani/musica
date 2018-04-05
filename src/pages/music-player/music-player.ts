import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaPlugin, MediaObject } from '@ionic-native/media';

/**
 * Generated class for the MusicPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-music-player',
  templateUrl: 'music-player.html',
})
export class MusicPlayerPage {
  public music = {};
  private songMedia: MediaObject;

  constructor(public navCtrl: NavController, 
    private mediaPlugin: MediaPlugin,
    public navParams: NavParams) {
    this.music = this.navParams.get('music');
    console.log(this.music);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicPlayerPage');
  }

  playMusic () {
    this.songMedia = this.mediaPlugin.create(this.music["music_url"]);
    this.songMedia.play();
  }

  pauseMusic () {
    this.songMedia.pause();
  }

  stopMusic () {
    this.songMedia.stop();
    this.songMedia.release();
  }

}
