interface Livro {
  id: number;
  titulo: string;
  autor: string;
}

function getLivros(): Livro[] {
    return [
        {id: 1, titulo: 'JavaScript Data Structures Algorithms', autor: 'Loiane Groner'},
        {id: 2, titulo: 'Mastering ExtJS', autor: 'Loiane Groner'},
        {id: 3, titulo: 'ExtJS First Look', autor: 'Loiane Groner'}
    ];
}

function imprimirLivro({titulo: livro, autor: autora}: Livro) {
    console.log(`${livro} foi escrito por ${autora}`);
}

function log([livro1, livro2]: Livro[]) {
    imprimirLivro(livro1);
    imprimirLivro(livro2);
}

log(getLivros());