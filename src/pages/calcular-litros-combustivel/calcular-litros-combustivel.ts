import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarroService } from '../../services/Carro.service';
import { Carro } from '../../models/Carro';

/**
 * Generated class for the CalcularLitrosCombustivelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calcular-litros-combustivel',
  templateUrl: 'calcular-litros-combustivel.html',
  providers : [CarroService]
})
export class CalcularLitrosCombustivelPage {

  public carros: Array<Carro> = new Array<Carro>();
  public carroSelecionadoId: number;
  public tipoCombustivel: number = 1 ;
  public distancia : number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public carroService : CarroService ) {
    this.carros = this.carroService.listarCarros();
    console.log(this.carros);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalcularLitrosCombustivelPage');
  }
  calcular(){
    let carro: Carro = this.carroService.buscarCarro(this.carroSelecionadoId);
    console.log(carro);
    //let resultado: number = this.carroService.calcularQuantidadeLitros( this.distancia, carro, this.tipoCombustivel);
    
  }
}
