import { Papel } from "./Papel";
import { TipoAcesso } from "./tipo-acesso";

export class Aluno extends Papel {
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

