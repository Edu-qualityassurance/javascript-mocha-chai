const listaPessoas = require("../metodos/lista.js");

function classificarPessoas(pessoas) {
  const classificacao = [];

  for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    const { nome, idade, email } = pessoa;
    let faixaEtaria;

    if (idade < 12) {
      faixaEtaria = 'Criança';
    } else if (idade >= 12 && idade <= 17) {
      faixaEtaria = 'Adolescente';
    } else {
      faixaEtaria = 'Adulto';
        }
    classificacao.push({ nome, idade, email, faixaEtaria });
  }
  return classificacao;
}
module.exports = classificarPessoas;
