<?php

class Estado {
    public string $nome = '';
    public string $uf = '';

    public function  __construct( $nome = '', $uf = '' ) {
        $this->nome = $nome;
        $this->uf = $uf;
    }
}