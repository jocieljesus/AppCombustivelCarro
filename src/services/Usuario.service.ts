
import { IUsuarioService } from './../interfaces/IUsuarioService';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';


@Injectable()

export class UsuarioService implements IUsuarioService{
    public usuarios: Array<Usuario>;
    constructor(){
        let listaUsuario = JSON.parse(localStorage.getItem("usuario"));
        this.usuarios = (listaUsuario) ? listaUsuario : [];
    }

    criarUsuario(usuario:Usuario): boolean {
       if (!usuario.nome) throw new Error("O campo nome é obrigatório."); // validação 
       if (!usuario.email) throw new Error("O campo email é obrigatório."); 
    
       if (this.buscarUsuarioPorEmail(usuario.email)) throw new Error("Já existe um usuário com esse email.");
       usuario.id = this.totalUsuarios()+1;

        this.usuarios.push(usuario);
       //salvando usuário no local storege e convertendo o objeto para string.
        localStorage.setItem("usuario", JSON.stringify(this.usuarios));
        return true;
       
    }
    buscarUsuario(id: number): Usuario {
        let usuario: Usuario = this.usuarios.find(u => u.id == id);
            return usuario;
    }
    listarUsuarios(): Usuario[] {
        return this.usuarios;
    }
    buscarUsuarioPorEmail(email: string): Usuario {
        let usuario: Usuario = this.usuarios.find(u => u.email == email);
        return usuario;
    }
    logar(usuario: Usuario): void {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
        
    }
    totalUsuarios(): number {
        return this.usuarios.length;
    }
    retornarUsuarioLogado(): Usuario {
        let usuarioLogado: Usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
        return usuarioLogado;
    }
    
}