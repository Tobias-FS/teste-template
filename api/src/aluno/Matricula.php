<?php

class Matricula {
    public string $numero;
    public DateTime $data;

    public function __construct(string $numero, DateTime $data) {
        $this->numero = $numero;
        $this->data = $data;
    }
}