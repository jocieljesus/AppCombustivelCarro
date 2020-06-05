import { CarrosPage } from './../carros/carros';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { UsuarioService } from '../../services/Usuario.service';
import { Usuario } from '../../models/Usuario';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public listaUsuarios: Array<Usuario> = new Array<Usuario>();

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public menu : MenuController, public usuarioService: UsuarioService){

       this.listaUsuarios = this.usuarioService.listarUsuarios();
       

    
     }

  ionViewDidLoad() {
    this.menu.swipeEnable(false);
  }
  ionViewDidLeave(){
    //remover arrastar menu
    this.menu.swipeEnable(true);
  }
  abrirCadastroUsuario(){
    this.navCtrl.push(CadastroPage);
  }
  abrirPaginaCarros(usuario : Usuario){
    this.usuarioService.logar(usuario);
    this.navCtrl.setRoot(CarrosPage);
    
  }

}
