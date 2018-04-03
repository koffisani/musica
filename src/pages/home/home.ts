import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';
import { MusicProvider } from '../../providers/music/music';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public allMusic = [];

  constructor(private musicProvider: MusicProvider,
    private actionSheetController: ActionSheetController, 
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
  addOneSong (refresher) {
    this.musicProvider.getOneSong()
      .subscribe((oneSong:any) => {
        this.allMusic.unshift(oneSong[0]);
        refresher.complete();
      });
  }

  shareSong () {
    let shareSongActionSheet = this.actionSheetController.create({
      title: "Share Song with Friends",
      buttons: [
        {
          text: "Share on Facebook",
          icon: "logo-facebook"
        },
        {
          text: "Share on Twitter",
          icon: "logo-twitter"
        },
        {
          text: "Share",
          icon: "share"
        },
        {
          text: "Cancel",
          role: "destructive"
        }
      ]
    });
    shareSongActionSheet.present();
  } 

}
