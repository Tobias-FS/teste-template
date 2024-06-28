<?php

require_once 'RepositorioUsuario.php';
require_once 'RepositorioException.php';

class RepositorioUsuarioEmBDR implements RepositorioUsuario {

    private $pdo = null;

    function __construct( $pdo ) {
        $this->pdo = $pdo;
    }

    function cadastrarUsuario( $usuario ) {
        try {
            $sql = 'INSERT INTO usuario ( nome, email, userName, senha )
            VALUES ( :nome, :email, :userName, :senha )';
            $ps = $this->pdo->prepare($sql);
            $ps->execute( [
            'nome' => $usuario[ 'nomeUsuario' ],
            'email' => $usuario[ 'email' ],
            'userName' => $usuario[ 'userName' ],
            'senha' => $usuario[ 'senha' ]
            ] );
        } catch ( PDOException $e ) {
            throw new RepositorioException(
                'Erro ao cadastrar emprestimo', 500, $e );
        }
    }

}