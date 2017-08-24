enum TipoFigura {
    circulo = 'circulo',
    retangulo = 'retangulo',
    quadrado = 'quadrado'
}

type Figura = 
    {tipo: TipoFigura.circulo, raio: number} |
    {tipo: TipoFigura.retangulo, a: number, c: number} |
    {tipo: TipoFigura.quadrado, l: number};

function calcularArea(figura: Figura) {
    switch(figura.tipo){
        case TipoFigura.circulo: return Math.PI * figura.raio ** 2;
        case TipoFigura.retangulo: return figura.a * figura.c;
        case TipoFigura.quadrado: return figura.l ** 2;
    }
    throw new Error('Figura inválida');
}    

const circulo: Figura = {tipo: TipoFigura.circulo, raio: 2};
calcularArea(circulo);
