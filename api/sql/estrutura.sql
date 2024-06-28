CREATE TABLE usuario (
    id INT AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100),
    userName VARCHAR(100),
    senha VARCHAR( 100 ),
    CONSTRAINT `pk_usuario_id` PRIMARY KEY ( id ),
    CONSTRAINT `unq_usuario_email` UNIQUE ( email )
)