<?php

require_once 'UsuarioView.php';
require_once 'RepositorioUsuarioEmBDR.php';

class UsuarioController {

    private $usuarioView;
    private $repoUsuario;

    public function __construct( $pdo, $req, $res ) {
        $this->usuarioView = new UsuarioView( $req, $res );
        $this->repoUsuario = new RepositorioUsuarioEmBDR( $pdo );
    }

    public function cadastrarUsuario() {
        $dadosUsuario = $this->usuarioView->obterDadosCadatro();
        $this->repoUsuario->cadastrarUsuario( $dadosUsuario );
    }

}