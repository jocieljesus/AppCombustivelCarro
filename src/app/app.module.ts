import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CalcularLitrosCombustivelPage } from '../pages/calcular-litros-combustivel/calcular-litros-combustivel';
import { CadastroCarroPage } from '../pages/cadastro-carro/cadastro-carro';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CarrosPage } from '../pages/carros/carros';
import { LoginPage } from '../pages/login/login';
import { UsuarioService } from '../services/Usuario.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CadastroPage, 
    CadastroCarroPage,
    CalcularLitrosCombustivelPage, 
    CarrosPage, 
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CadastroPage, 
    CadastroCarroPage,
    CalcularLitrosCombustivelPage, 
    CarrosPage, 
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UsuarioService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
