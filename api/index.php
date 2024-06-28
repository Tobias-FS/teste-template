<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require_once 'vendor/autoload.php';
require_once 'src/usuario/UsuarioController.php';

echo 'oi';
$pdo = null;
$pdo = new PDO( 'mysql:dbname=teste_template;host=127.0.0.1;charset=UTF8', 
                'root', '', [ PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION ] );

$app = AppFactory::create();

$app->get('/', function (Request $request, Response $response, $args) {
    $response->getBody()->write("Hello world!");
    return $response;
});

$app->options('/usuario', function (Request $request, Response $response) {
    $response = $response
        ->withHeader('Access-Control-Allow-Origin', '*')
        ->withHeader('Access-Control-Allow-Methods', 'POST')
        ->withHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return $response;
});

$app->post('/usuario', function (Request $request, Response $response, $args) use( $pdo ) {
    echo 'oi';
    $usuarioController = new UsuarioController( $pdo, $request, $response );
    
    $usuarioController->cadastrarUsuario();
    return $response;
});

$app->run();
