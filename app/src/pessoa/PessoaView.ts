import { Papel } from "../papel/Papel";
import { Endereco } from "./Endereco";
import { Pessoa } from "./Pessoa";
import { Credenciais } from "./Credenciais";
import { Estado } from "./Estado";
import { Cidade } from "./Cidade";
import { Aluno } from "../aluno/Aluno";
import { Responsavel } from "../Responsavel/Responsavel";

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
        const tipoUsuario = document.getElementById( 'tipoUsuario' ) as HTMLSelectElement;

        if( tipoUsuario.value === "aluno" ){
            const maioridade = document.getElementById( "maioridade" ) as HTMLSelectElement;
            if( !maioridade.value ){
                const campoNomeResponsavel = document.getElementById( 'nomeResponsavel' ) as HTMLInputElement;
                const campoDataNascimentoResponsavel = document.getElementById( 'dataNascimentoResponsavel' ) as HTMLInputElement;
                const campoCPFResponsavel = document.getElementById( 'cpfResponsavel' ) as HTMLInputElement;
                const campoLogradouroResponsavel = document.getElementById( 'logradouroResponsavel' ) as HTMLInputElement;
                const campoCEPResponsavel = document.getElementById( 'cepResponsavel' ) as HTMLInputElement;
                const campoComplementoResponsavel = document.getElementById( 'complementoResponsavel' ) as HTMLInputElement;
                const campoCidadeResponsavel = document.getElementById( 'cidadeResponsavel' ) as HTMLInputElement;
                const campoEstadoResponsavel = document.getElementById( 'estadoResponsavel' ) as HTMLInputElement;
                const campoBairroResponsavel = document.getElementById( 'bairroResponsavel' ) as HTMLInputElement;
                const campoEmailResponsavel = document.getElementById( 'emailResponsavel' ) as HTMLInputElement;
                const campoSenhaResponsavel = document.getElementById( 'senhaResponsavel' ) as HTMLInputElement;

                const estado = new Estado(
                    campoEstado.value
                )
        
                const cidade = new Cidade(
                    campoCidade.value,
                    estado
        
                )
                
                const enderecoResponsavel = new Endereco(
                    campoLogradouro.value,
                    campoComplemento.value,
                    campoCEP.value,
                    campoBairro.value,
                    cidade
                )
        
                const credenciaisResponsavel = new Credenciais( 
                    campoEmail.value,
                    campoSenha.value
                )

                const responsavel = new Pessoa( 
                    campoNomeResponsavel.value,
                    campoDataNascimentoResponsavel.value,
                    campoEmailResponsavel.value,
                    campoCPFResponsavel.value,
                    credenciaisResponsavel,
                    enderecoResponsavel,
                    new Responsavel( true )
                )
                console.log( responsavel )
            }
        }

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