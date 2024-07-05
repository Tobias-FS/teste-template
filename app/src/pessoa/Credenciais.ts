export class Credenciais {
    identificacao: string;
    senha: string;

    constructor ( identificacao: string, senha: string ) {
        this.identificacao = identificacao;
        this.senha = senha;
    }
}