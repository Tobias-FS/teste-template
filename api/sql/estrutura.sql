CREATE TABLE tipoAcesso (
    id INT NOT NULL AUTO_INCREMENT,
    descricao VARCHAR(50) NOT NULL,
    CONSTRAINT `pk_tipoAcesso_id` PRIMARY KEY ( id )
);

CREATE TABLE papel (
    id INT NOT NULL AUTO_INCREMENT,
    tipo_acesso_id INT,
    CONSTRAINT `pk_papel_id` PRIMARY KEY ( id )
    CONSTRAINT `fk_papel__tipoAcesso` FOREIGN KEY ( tipo_acesso_id )
		REFERENCES tipoAcesso( id ) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE Pessoa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    papel_id INT,
    FOREIGN KEY (papel_id) REFERENCES Papel(id)
);

CREATE TABLE estado (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    uf CHAR(2),
    CONSTRAINT `pk_estado_id` PRIMARY KEY ( id )
)

CREATE TABLE Matricula (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero VARCHAR(50) NOT NULL,
    data_matricula DATE NOT NULL
);

CREATE TABLE Aluno (
    pessoa_id INT PRIMARY KEY,
    matricula_id INT,
    FOREIGN KEY (pessoa_id) REFERENCES Pessoa(id),
    FOREIGN KEY (matricula_id) REFERENCES Matricula(id)
);

