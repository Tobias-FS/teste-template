<?php

require_once __DIR__ .  '/Usuario.php';

class UsuarioView {

    private $req;
    private $res;
    
    function __construct( $req, $res  ) {
        $this->req = $req;
        $this->res = $res;
    }

    function obterDadosCadatro() {
        $jsonData = file_get_contents('php://input');

        // $login = isset( $_POST[ 'usuario' ] ) ? htmlspecialchars( $_POST[ 'login' ] ) : null;
        // $senha = isset( $_POST[ 'senha' ] ) ? htmlspecialchars( $_POST[ 'senha' ] ) : null;

        // Decodifica o JSON para um array associativo
        $usuario = json_decode($jsonData, true);
        return $usuario;
    }

    public function exibirSucesso($codigo) {
        return $this->res->status( $codigo );
        // http_response_code($codigo);
        // header('Content-Type:application/json;charset=utf-8');
    }

    public function exibirErro($mensagem, $codigo) {
        return $this->res->status( $codigo )->send( $mensagem );
        // http_response_code($codigo);
        // header('Content-Type:application/json;charset=utf-8');
        // echo json_encode($mensagem);
        die();
    }

}

?>