const pessoa = { idade: 33, cpf:"12345678909", nome: "Wesdras"  }

// const nome = pessoa.nome;
// const idade = pessoa.idade;

const { nome, idade } = pessoa;

console.log(nome);

const teste = ({nome : Nome }) => {
    console.log(Nome)
}

teste(pessoa);

const arr = ['valor', () => 10 ]

const [valor, metodo] = arr;

console.log(valor);
console.log(metodo());

