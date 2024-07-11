<?php

class Credenciais {
    public $identificacao;
    public $senha;

    public function __construct( $identificacao, $senha ) {
        $this->identificacao = $identificacao;
        $this->senha = $senha;
    }
}