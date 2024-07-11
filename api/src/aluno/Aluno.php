<?php

require_once 'Matricula.php';

class Aluno extends Papel {
    public Matricula $matricula;

    public function __construct(bool $ativo, DateTime $criadoEm, string $criadoPor, Matricula $matricula) {
        parent::__construct($ativo, $criadoEm, $criadoPor);
        $this->matricula = $matricula;
    }

    public function acesso(): TipoAcesso {
        return TipoAcesso::ALUNO;
    }
}