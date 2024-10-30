const falaNome = (nome, sobrenome) => {
  return nome + sobrenome;
};
falaNome("Jean", "Lucas");
exports.falaNome = falaNome;

class Pessoa {
  constructor(nome, idade) {
    (this.nome = nome), (this.idade = idade);
  }
}
const nome='lucas'
const sexo="M"

module.exports={
        Pessoa,nome,sexo
}