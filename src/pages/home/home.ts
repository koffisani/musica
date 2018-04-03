import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { MusicProvider } from '../../providers/music/music';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public allMusic = [];

  constructor(private musicProvider: MusicProvider, 
    private loadingController: LoadingController,
    public navCtrl: NavController) {
      
  }
  ionViewDidLoad () {
    let allMusicLoadingController = this.loadingController.create({
      content: "Getting your music from server"
    });
    allMusicLoadingController.present();
    this.musicProvider.getMusic()
        .subscribe((musicList: any) => {
          allMusicLoadingController.dismiss();
          this.allMusic = musicList
        });
  }

}
