import { Papel } from "../papel/Papel";
import { TipoAcesso } from "../papel/tipo-acesso";
import { Pessoa } from "../pessoa/Pessoa";

export class Aluno extends Papel {
    constructor(ativo: boolean, criadoEm: Date, criadoPor: Pessoa) {
        super(ativo, criadoEm, criadoPor);
    }

    acesso(): TipoAcesso {
        return TipoAcesso.ALUNO;
    }
}

