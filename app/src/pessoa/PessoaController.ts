import { PessoaService } from "../service/PessoaService";
import { PessoaView } from "./PessoaView";


export class PessoaController {
    private pessoaService = new PessoaService();
    private pessoaView = new PessoaView();

    iniciar() {
        this.pessoaView.iniciar( this.cadastrarPessoa.bind( this ) );
        
    }

    cadastrarPessoa() {
        const pessoa = this.pessoaView.obterDadosCadastroPessoa();
        console.log( pessoa );
    }

}