<?php

class Endereco {
    public $logradouro = '';
    public $complemento = '';
    public $cep = '';
    public $bairro = '';
    public $endereço;

    public function __construct( 
        $logradouro = '', $complemento = '', $cep = '', $bairro = '', $endereco ) {
        $this->logradouro = $logradouro;
        $this->complemento = $complemento;
        $this->cep = $cep;
        $this->bairro = $bairro;
        $this->endereço = $endereco;
    }
}