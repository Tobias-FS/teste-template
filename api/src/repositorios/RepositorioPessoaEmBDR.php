<?php

require_once 'RepositorioPessoa.php';
require_once '../pessoa/Pessoa.php';

class RepositorioPessoaEmBDR implements RepositorioPessoa {
    private $pdo = null;

    public function __construct( $pdo ) {
        $this->pdo = $pdo;
    }

    public function cadastrarPessoa( Pessoa $pessoa ) {
        
    }
    
}