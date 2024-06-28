<?php

class Usuario {

    public $id = 0;
    public $nomeUsuario = '';
    public $email = '';
    public $userName = '';
    public $senha = '';

    function __constructor( 
        $id = 0, $nomeUsuario = '', $email = '', $userName = '', $senha = ''  ) {
            $this->id = $id;
            $this->nomeUsuario = $nomeUsuario;
            $this->email = $email;
            $this->userName = $userName;
            $this->senha - $senha;
        }

}