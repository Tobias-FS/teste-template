import { Papel } from "../papel/Papel";
import { Endereco } from "./Endereco";
import { Pessoa } from "./Pessoa";
import { Credenciais } from "./Credenciais";
import { Estado } from "./Estado";
import { Cidade } from "./Cidade";
import { Aluno } from "../aluno/Aluno";

export class PessoaView {

    iniciar( cadastrarPessoa: () => void ) {
        const botaoCadastrarPessoa = document.getElementById( 'botaoCadastrarPessoa' );
        botaoCadastrarPessoa?.addEventListener( 'click', ( ev )=> {
            ev.preventDefault();
            cadastrarPessoa();
         } )
    }

    obterDadosCadastroPessoa(): Pessoa {
        const campoNome = document.getElementById( 'nome' ) as HTMLInputElement;
        const campoDataNascimento = document.getElementById( 'dataNascimento' ) as HTMLInputElement;
        const campoCPF = document.getElementById( 'cpf' ) as HTMLInputElement;
        const campoLogradouro = document.getElementById( 'logradouro' ) as HTMLInputElement;
        const campoCEP = document.getElementById( 'cep' ) as HTMLInputElement;
        const campoComplemento = document.getElementById( 'complemento' ) as HTMLInputElement;
        const campoCidade = document.getElementById( 'cidade' ) as HTMLInputElement;
        const campoEstado = document.getElementById( 'estado' ) as HTMLInputElement;
        const campoBairro = document.getElementById( 'bairro' ) as HTMLInputElement;
        const campoEmail = document.getElementById( 'email' ) as HTMLInputElement;
        const campoSenha = document.getElementById( 'senha' ) as HTMLInputElement;

        const estado = new Estado(
            campoEstado.value
        )

        const cidade = new Cidade(
            campoCidade.value,
            estado

        )
        
        const endereco = new Endereco(
            campoLogradouro.value,
            campoComplemento.value,
            campoCEP.value,
            campoBairro.value,
            cidade
        )

        const credenciais = new Credenciais( 
            campoEmail.value,
            campoSenha.value
        )

        const aluno = new Aluno(
            true
        )

        return new Pessoa(
            campoNome.value,
            campoDataNascimento.value,
            campoEmail.value,
            campoCPF.value,
            credenciais,
            endereco,
            aluno
        );
        
    }

}