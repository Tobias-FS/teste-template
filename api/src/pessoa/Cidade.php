<?php

// require_once 'Estado.php';

class Cidade {
    /**
     * @var Estado[]
     */
    public $estados = [];
    public $nome = '';

    public function __construct(array $estados, $nome = '' ) {
        $this->estados = $estados;
        $this->nome = $nome;
    }

}