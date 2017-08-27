interface Pessoa {
  nome: string;
  idade: number;
}

interface PessoaTel extends Pessoa {
  telefone: string;
}

function ordernarNome(a: Pessoa[]) {
  var result = a.slice(0);
  result.sort(function(x, y) {
    return x.nome.localeCompare(y.nome);
  });
  return result;
}

ordernarNome([]);

class OlaMundo {
  //nome: string;
  constructor(public nome: string) {}
  ola() {
    console.log(`Olá ${this.nome}`);
  }
}

//Faça
let varString = 'BrazilJS';

//NÀO FAÇA
let string2: string = 'BrazilJS';

let maria: Pessoa = { nome: 'Maria', idade: 20 };
let joao: PessoaTel = { nome: 'João', idade: 21, telefone: '34533545' };

ordernarNome([maria, joao]);

function contarLinhas(texto?: (string | null)[]): number {
  let count = 0;
  if (texto) {
    for (const linha of texto) {
      if (linha && linha.length !== 0) {
        count = count + 1;
      }
    }
  }
  return count;
}

let a = contarLinhas(['um', 'dois', '', 'tres']);
let b = contarLinhas(['ola', null, 'mundo']);
let c = contarLinhas();
