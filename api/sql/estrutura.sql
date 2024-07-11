CREATE TABLE tipoAcesso (
    id INT NOT NULL AUTO_INCREMENT,
    descricao VARCHAR(50) NOT NULL,
    CONSTRAINT `pk_tipoAcesso_id` PRIMARY KEY ( id )
);

CREATE TABLE papel (
    id INT NOT NULL AUTO_INCREMENT,
    tipo_acesso_id INT,
    CONSTRAINT `pk_papel_id` PRIMARY KEY ( id ),
    CONSTRAINT `fk_papel__tipoAcesso` FOREIGN KEY ( tipo_acesso_id )
		REFERENCES tipoAcesso( id ) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE Pessoa (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    email VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    cadastrado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    papel_id INT,
    credenciais_id INT,
    CONSTRAINT `pk_pessoa_id` PRIMARY KEY ( id ),
    CONSTRAINT `fk_pessoa__papel` FOREIGN KEY ( papel_id )
		REFERENCES papel( id ) ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT `fk_pessoa__credenciais` FOREIGN KEY ( credenciais_id )
		REFERENCES credenciais( id ) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE credenciais (
    id INT NOT NULL AUTO_INCREMENT,
    identificacao VARCHAR(100) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    CONSTRAINT `pk_credenciais_id` PRIMARY KEY ( id )
);

CREATE TABLE matricula (
    id INT NOT NULL AUTO_INCREMENT,
    numero VARCHAR(50) NOT NULL,
    data_matricula DATE NOT NULL,
    CONSTRAINT `pk_matricula_id` PRIMARY KEY ( id )
);

CREATE TABLE aluno (
    id INT NOT NULL AUTO_INCREMENT,
    pessoa_id INT,
    matricula_id INT,
    CONSTRAINT `pk_aluno_id` PRIMARY KEY ( id ),
    CONSTRAINT `fk_aluno__pessoa` FOREIGN KEY ( pessoa_id )
		REFERENCES pessoa( id ) ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT `fk_aluno__matricula` FOREIGN KEY ( matricula_id )
		REFERENCES matricula( id ) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE estado (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    uf CHAR(2),
    CONSTRAINT `pk_estado_id` PRIMARY KEY ( id )
)

