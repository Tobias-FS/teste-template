import { Papel } from "../papel/Papel";
import { Endereco } from "./Endereco";
import { Pessoa } from "./Pessoa";
import { Credenciais } from "./Credenciais";
import { Estado } from "./Estado";
import { Cidade } from "./Cidade";
import { Aluno } from "../papel/Aluno";
import { Responsavel } from "../Responsavel/Responsavel";
import { Professor } from "../papel/Professor";
import { Funcionario } from "../papel/Funcionario";

export class PessoaView {

    iniciar(cadastrarPessoa: () => void) {
        const botaoCadastrarPessoa = document.getElementById('botaoCadastrarPessoa');
        botaoCadastrarPessoa?.addEventListener('click', (ev) => {
            ev.preventDefault();
            cadastrarPessoa();
        })
    }

    obterDadosCadastroPessoa(): Pessoa | Array<Pessoa> {

        const campoNome = document.getElementById('nome') as HTMLInputElement;
        const campoDataNascimento = document.getElementById('dataNascimento') as HTMLInputElement;
        const campoCPF = document.getElementById('cpf') as HTMLInputElement;
        const campoLogradouro = document.getElementById('logradouro') as HTMLInputElement;
        const campoCEP = document.getElementById('cep') as HTMLInputElement;
        const campoComplemento = document.getElementById('complemento') as HTMLInputElement;
        const campoCidade = document.getElementById('cidade') as HTMLInputElement;
        const campoEstado = document.getElementById('estado') as HTMLInputElement;
        const campoBairro = document.getElementById('bairro') as HTMLInputElement;
        const campoEmail = document.getElementById('email') as HTMLInputElement;
        const campoSenha = document.getElementById('senha') as HTMLInputElement;
        const tipoUsuario = document.getElementById('tipoUsuario') as HTMLSelectElement;
        const administrador = document.getElementById( 'admin' ) as HTMLSelectElement;
        
        const maioridade = document.getElementById("maioridade") as HTMLSelectElement;

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

        let tipoAcesso: Papel = new Professor( administrador.value === "true" );
        switch( tipoUsuario.value ){
            case "funcionario": 
                tipoAcesso = new Funcionario( administrador.value === "true" );
                break;
            case "aluno": 
                tipoAcesso = new Aluno( true );
                break;
        }

        const pessoa = new Pessoa(
            campoNome.value,
            campoDataNascimento.value,
            campoEmail.value,
            campoCPF.value,
            credenciais,
            endereco,
            tipoAcesso
        );
        
        if ( maioridade.value === "false" ) {
            const responsavel = this.obterDadosCadastroResponsavel();
            return [ pessoa, responsavel ]
        }

        return pessoa;
    }

    obterDadosCadastroResponsavel(): Pessoa {
        const campoNomeResponsavel = document.getElementById('nomeResponsavel') as HTMLInputElement;
        const campoDataNascimentoResponsavel = document.getElementById('dataNascimentoResponsavel') as HTMLInputElement;
        const campoCPFResponsavel = document.getElementById('cpfResponsavel') as HTMLInputElement;
        const campoLogradouroResponsavel = document.getElementById('logradouroResponsavel') as HTMLInputElement;
        const campoCEPResponsavel = document.getElementById('cepResponsavel') as HTMLInputElement;
        const campoComplementoResponsavel = document.getElementById('complementoResponsavel') as HTMLInputElement;
        const campoCidadeResponsavel = document.getElementById('cidadeResponsavel') as HTMLInputElement;
        const campoEstadoResponsavel = document.getElementById('estadoResponsavel') as HTMLInputElement;
        const campoBairroResponsavel = document.getElementById('bairroResponsavel') as HTMLInputElement;
        const campoEmailResponsavel = document.getElementById('emailResponsavel') as HTMLInputElement;
        const campoSenhaResponsavel = document.getElementById('senhaResponsavel') as HTMLInputElement;

        const estadoResponsavel = new Estado(
            campoEstadoResponsavel.value
        )

        const cidadeResponsavel = new Cidade(
            campoCidadeResponsavel.value,
            estadoResponsavel

        )

        const enderecoResponsavel = new Endereco(
            campoLogradouroResponsavel.value,
            campoComplementoResponsavel.value,
            campoCEPResponsavel.value,
            campoBairroResponsavel.value,
            cidadeResponsavel
        )

        const credenciaisResponsavel = new Credenciais(
            campoEmailResponsavel.value,
            campoSenhaResponsavel.value
        )

        return new Pessoa(
            campoNomeResponsavel.value,
            campoDataNascimentoResponsavel.value,
            campoEmailResponsavel.value,
            campoCPFResponsavel.value,
            credenciaisResponsavel,
            enderecoResponsavel,
            new Responsavel(true)
        )
    }

    validarCPF(cpf: string): boolean {
        // Remove qualquer caractere não numérico
        cpf = cpf.replace(/[^\d]/g, '');

        // Verifica se o CPF tem 11 dígitos
        if (cpf.length !== 11) {
            return false;
        }

        // Verifica se todos os dígitos são iguais (ex: 111.111.111-11)
        if (/^(\d)\1{10}$/.test(cpf)) {
            return false;
        }

        // Calcula o primeiro dígito verificador
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let primeiroDigitoVerificador = 11 - (soma % 11);
        if (primeiroDigitoVerificador >= 10) {
            primeiroDigitoVerificador = 0;
        }

        // Calcula o segundo dígito verificador
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        let segundoDigitoVerificador = 11 - (soma % 11);
        if (segundoDigitoVerificador >= 10) {
            segundoDigitoVerificador = 0;
        }

        // Verifica se os dígitos verificadores estão corretos
        return (
            primeiroDigitoVerificador === parseInt(cpf.charAt(9)) &&
            segundoDigitoVerificador === parseInt(cpf.charAt(10))
        );
    }

    validarCampos(): boolean {
        const campos = [
            'nome',
            'dataNascimento',
            'cpf',
            'logradouro',
            'cep',
            'complemento',
            'cidade',
            'estado',
            'bairro',
            'email',
            'senha'
        ];

        for (let campo of campos) {
            const input = document.getElementById(campo) as HTMLInputElement | null;
            if (input && input.value.trim() === '') {
                alert(`Por favor, preencha o campo ${campo}.`);
                return false;
            }
        }

        // Campos específicos de responsável legal
        const tipoUsuario = (document.getElementById("tipoUsuario") as HTMLSelectElement | null)?.value;
        const maioridade = (document.getElementById("maioridade") as HTMLSelectElement | null)?.value;
        if (tipoUsuario === "aluno" && maioridade === "false") {
            const camposResponsavel = [
                'nomeResponsavel',
                'dataNascimentoResponsavel',
                'cpfResponsavel',
                'logradouroResponsavel',
                'cepResponsavel',
                'complementoResponsavel',
                'cidadeResponsavel',
                'estadoResponsavel',
                'bairroResponsavel',
                'emailResponsavel',
                'senhaResponsavel'
            ];

            for (let campo of camposResponsavel) {
                const inputResponsavel = document.getElementById(campo) as HTMLInputElement | null;
                if (inputResponsavel && inputResponsavel.value.trim() === '') {
                    alert(`Por favor, preencha o campo ${campo}`);
                    return false;
                }
            }
        }

        return true;
    }

}