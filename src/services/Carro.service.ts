import { UsuarioService } from './Usuario.service';
import { ICarroService } from './../interfaces/ICarroService';

import { Injectable } from '@angular/core';
import { Carro } from '../models/Carro';
import { Usuario } from '../models/Usuario';

@Injectable()

export class CarroService implements ICarroService{
    public  usuarioLogado: Usuario;
    public listaCarros: Array<Carro>;

    constructor(public usuarioService: UsuarioService){
        this.usuarioLogado = this.usuarioService.retornarUsuarioLogado();
        let carros : Array <Carro> =JSON.parse(localStorage.getItem('carros'));
        this.listaCarros = (carros) ? carros: [];
    }


    criarCarro(carro: Carro): boolean {
        if (!carro.modelo) throw new Error("O campo Modelo é obrigatorio ");
        if (!carro.marca) throw new Error("O campo Marca é obrigatorio ");
        if (!carro.consumoGasolina) throw new Error("O campo Consumo Gasolina  é obrigatorio ");
        if (!carro.consumoAlcool) throw new Error("O campo Consumo Álcool é obrigatorio ");

        carro.id = this.totalCarros() + 1;
        carro.usuarioId = this.usuarioLogado.id;

        this.listaCarros.push(carro);

        localStorage.setItem('carros', JSON.stringify(this.listaCarros));

        return true;
    }
    buscarCarro(id: number): Carro {
        let carro : Carro =  this.listaCarros.find(car => car.id == id);
        return carro;
        
    }
    listarCarros(): Carro[] {
        let carros : Array<Carro> = this.listaCarros.filter(carro => carro.usuarioId === this.usuarioLogado.id);
        return carros;
    }
    totalCarros(): number {
       return this.listaCarros.length;
    }
    calcularQuantidadeLitros(distancia: number, carro: Carro, tipo: number): number {
        throw new Error("Method not implemented.");
    }
}