export class Usuario {
    id: number;
    nomeUsuario: string;
    email: string;
    userName: string;
    senha: string;

    constructor( 
        id: number = 0, nomeUsuario: string = '', email: string = '', userName = '', senha: string = '' ) {
            this.id = id;
            this.nomeUsuario = nomeUsuario;
            this.email = email;
            this.userName = userName;
            this.senha = senha;
        }
}