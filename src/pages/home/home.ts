import { Component } from '@angular/core';

import { NavController, ToastController } from 'ionic-angular';
import { Clima, ClimaProvider } from "../../providers/clima/clima.provider";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ClimaProvider]
})
export class HomePage {

  clima: Clima;

  constructor(public navCtrl: NavController
    , public provider: ClimaProvider
    , public toast: ToastController
  ) {
    this.clima = new Clima();
    this.provider.loadWeather().subscribe((c)=> this.loaded(c)
      ,(err)=> this.showError(err));

  }

  loaded(c:Clima){
    this.clima = c;
  }

  showError(err:string){
    let t = this.toast.create({
      message:err,
      duration:3000
    });
    
    t.present();
  }

}
