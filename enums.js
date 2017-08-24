"use strict";
function calcularArea(figura) {
    switch (figura.tipo) {
        case 'circulo': return Math.PI * Math.pow(figura.raio, 2);
        case 'retangulo': return figura.a * figura.l;
        case 'quadrado': Math.pow(figura.l, 2);
    }
    throw new Error('Figura inválida');
}
var circulo = { tipo: 'circulo', raio: 2 };
calcularArea(circulo);
