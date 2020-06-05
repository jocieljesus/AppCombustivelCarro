import { CarrosPage } from './../carros/carros';
import { CarroService } from './../../services/Carro.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Carro } from '../../models/Carro';

/**
 * Generated class for the CadastroCarroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-carro',
  templateUrl: 'cadastro-carro.html',
  providers: [CarroService]
})
export class CadastroCarroPage {
  public carro : Carro = new Carro();
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public carroServive : CarroService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroCarroPage');
  }
  salvarCarro(){
    let resultado = this.carroServive.criarCarro(this.carro);
    if (resultado) this.navCtrl.setRoot(CarrosPage);
  }
}
