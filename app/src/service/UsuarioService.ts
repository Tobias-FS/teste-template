import { Usuario } from "../usuario/Usuario";
import { BASE_API } from "./apiService";

export class UsuarioService {

    async cadastrarUsuario( usuario: Usuario ) {
        console.log( usuario );
        try {
            const resposta = await fetch( `${BASE_API}usuario`, {
                method: 'POST',
                body: JSON.stringify( usuario ),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            } );
            if ( resposta.ok ) {
                alert( 'Cliente cadastrado com sucesso!' );
                return resposta;
            }
        } catch( erro ){
            throw new Error( 'Não foi possivel realizar cadastro do cliente! ' );
        }
    }

}
