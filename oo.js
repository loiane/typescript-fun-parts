export class Cachorro extends Animal {
    /**
     * @param {string} nome 
     * @param {number} idade 
     */
    constructor(nome, idade) {
        super();
        this.nome = nome;
        this.idade = idade;
    }

    late() {
        console.log(`${this._nome} late: AU AU!`);
    }
}
let pet = new Cachorro(8, 'Jake');

