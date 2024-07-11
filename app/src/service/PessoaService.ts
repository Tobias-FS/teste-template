import { BASE_API } from "./apiServis";
import { Pessoa } from "../pessoa/Pessoa";

export class PessoaService {

    async cadastrarCliente( pessoa: Pessoa){
        try{
            const resposta = await fetch( `${BASE_API}pessoas`, {
                method : 'POST',
                body: JSON.stringify( pessoa ),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            } );
            if( resposta.ok ){
                alert( 'Cliente cadastrado com sucesso!' );
                return resposta;
            }
        }catch( erro ){
            throw new Error( 'Não foi possivel realizar cadastro do pessoa! ' );
        }
    }

}