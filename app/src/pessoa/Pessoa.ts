import { Credenciais } from "./Credenciais";
import { Endereco } from "./Endereco";
import { Papel } from "../papel/Papel";

export class Pessoa {
    nome: string;
    nascimento: string;
    email: string;
    cpf: string;
    // cadastradoEm: Date;
    // atualizadoEm: Date;
    credenciais: Credenciais;
    endereco: Endereco;
    papel: Papel;

    // constructor ( 
    //     nome: string, nascimento: Date, email: string, cpf: string, cadastradoEm: Date, 
    //     atualizadoEm: Date, credenciais: Credenciais, endereco: Endereco, papel: Papel[] ) {
    //         this.nome = nome;
    //         this.nascimento = nascimento;
    //         this.email = email;
    //         this.cpf = cpf;
    //         this.cadastradoEm = cadastradoEm;
    //         this.atualizadoEm = atualizadoEm;
    //         this.credenciais = credenciais;
    //         this.endereco = endereco;
    //         this.papel = papel;
    //     }

    constructor ( 
        nome: string, nascimento: string, email: string, cpf: string,
        credenciais: Credenciais, endereco: Endereco, papel: Papel ) {
            this.nome = nome;
            this.nascimento = nascimento;
            this.email = email;
            this.cpf = cpf;
            this.credenciais = credenciais;
            this.endereco = endereco;
            this.papel = papel;
        }
}