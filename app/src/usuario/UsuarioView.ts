import { Usuario } from "./Usuario";

export class UsuarioView {

    cadastrarCliente( cadastrarCliente: any ) {
        const botaoCadastrarCliente = document.getElementById( 'botaoCadastrarUsuario' ) as HTMLAnchorElement;
        botaoCadastrarCliente?.addEventListener( 'click', ( ev ) => {
            ev.preventDefault();
            //cadastraCliente();
            cadastrarCliente();
        })
        
    }

    coletarDadosCadastroUsuario(): Usuario {
        const campoNomeUsuario = document.getElementById( 'yourName' ) as HTMLInputElement;
        const campoEmail = document.getElementById( 'yourEmail' ) as HTMLInputElement;
        const campoUserName = document.getElementById( 'yourUsername' ) as HTMLInputElement;
        const campoSenha = document.getElementById( 'yourPassword' ) as HTMLInputElement;

        return new Usuario (
            0,
            campoNomeUsuario.value,
            campoEmail.value,
            campoUserName.value,
            campoSenha.value
        );
    }
}