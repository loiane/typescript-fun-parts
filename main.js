"use strict";
function ordernarNome(a) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        return x.nome.localeCompare(y.nome);
    });
    return result;
}
ordernarNome([]);
var OlaMundo = /** @class */ (function () {
    //nome: string;
    function OlaMundo(nome) {
        this.nome = nome;
    }
    OlaMundo.prototype.ola = function () {
        console.log("Ol\u00E1 " + this.nome);
    };
    return OlaMundo;
}());
//Faça
var varString = 'BrazilJS';
//NÀO FAÇA
var string2 = 'BrazilJS';
var maria = { nome: 'Maria', idade: 20 };
var joao = { nome: 'João', idade: 21, telefone: '34533545' };
ordernarNome([maria, joao]);
function contarLinhas(texto) {
    var count = 0;
    if (texto) {
        for (var _i = 0, texto_1 = texto; _i < texto_1.length; _i++) {
            var linha = texto_1[_i];
            if (linha && linha.length !== 0) {
                count = count + 1;
            }
        }
    }
    return count;
}
var a = contarLinhas(['um', 'dois', '', 'tres']);
var b = contarLinhas(['ola', null, 'mundo']);
var c = contarLinhas();
