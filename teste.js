// Testes usando Biblioteca Mocha e Chai
const assert = require('chai').assert;
const listaPessoas = require("../metodos/lista.js");
const classificarPessoas = require("../metodos/metodos.js");

describe('Quantidade de passoas na lista', function() {
  it('Quantidade de pessoas', function() {

    assert.equal(listaPessoas.length, 4)  

  });
});

