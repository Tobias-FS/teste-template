import { Papel } from "../papel/Papel";
import { TipoAcesso } from "../papel/tipo-acesso";

export class Professor extends Papel {
    // constructor(ativo: boolean, criadoEm: Date, criadoPor: Pessoa) {
    //     super(ativo, criadoEm, criadoPor);
    // }

    constructor(ativo: boolean) {
        super(ativo);
    }

    acesso(): TipoAcesso {
        return TipoAcesso.ALUNO;
    }
}

