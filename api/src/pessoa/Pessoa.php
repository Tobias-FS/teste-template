<?php

require_once 'Credencias.php';

class Pessoa {
    public string $nome;
    public DateTime $nascimento;
    public string $email;
    public string $cpf;
    public DateTime $cadastradoEm;
    public DateTime $atualizadoEm;
    public array $papeis;
    public Credenciais $credenciais;


    public function __construct(
        string $nome, DateTime $nascimento, string $email, string $cpf, 
        DateTime $cadastradoEm, DateTime $atualizadoEm, array $papeis
    ) {
        $this->nome = $nome;
        $this->nascimento = $nascimento;
        $this->email = $email;
        $this->cpf = $cpf;
        $this->cadastradoEm = $cadastradoEm;
        $this->atualizadoEm = $atualizadoEm;
        $this->papeis = $papeis;
    }
}