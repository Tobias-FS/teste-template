import { TipoAcesso } from "./tipo-acesso";
import { Pessoa } from "../pessoa/Pessoa";

export abstract class Papel {
    ativo: boolean;
    criadoEm: Date;
    criadoPor: Pessoa;

    constructor(ativo: boolean, criadoEm: Date, criadoPor: Pessoa) {
        this.ativo = ativo;
        this.criadoEm = criadoEm;
        this.criadoPor = criadoPor;
    }

    abstract acesso(): TipoAcesso;
}