import { CarroService } from './../../services/Carro.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroCarroPage } from '../cadastro-carro/cadastro-carro';
import { Carro } from '../../models/Carro';

/**
 * Generated class for the CarrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carros',
  templateUrl: 'carros.html',
  providers: [CarroService]
})
export class CarrosPage {
  public carros : Array<Carro> = new Array<Carro>();

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public carroService : CarroService) {
       this.carros = this.carroService.listarCarros();
       console.log(this.carros);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrosPage');
  }
  abrirCadastrarCarro(){
    this.navCtrl.setRoot(CadastroCarroPage);
  }
  

}
