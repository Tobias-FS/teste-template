<?php

abstract class Papel {
    public bool $ativo;
    public DateTime $criadoEm;
    public string $criadoPor;

    public function __construct(bool $ativo, DateTime $criadoEm, string $criadoPor) {
        $this->ativo = $ativo;
        $this->criadoEm = $criadoEm;
        $this->criadoPor = $criadoPor;
    }

    abstract public function acesso(): TipoAcesso;
}