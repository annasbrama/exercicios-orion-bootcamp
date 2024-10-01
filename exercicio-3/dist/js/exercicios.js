"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.procurarBio = procurarBio;
exports.procurarNome = procurarNome;
exports.removerId = removerId;
exports.alterar = alterar;
exports.contandoVogais = contandoVogais;
const lista_1 = require("./lista");
function procurarBio(id) {
    var _a;
    return ((_a = lista_1.lista.find(pessoa => pessoa.id === id)) === null || _a === void 0 ? void 0 : _a.bio) || "Erro: não encontrado";
}
function procurarNome(id) {
    var _a;
    return ((_a = lista_1.lista.find(pessoa => pessoa.id === id)) === null || _a === void 0 ? void 0 : _a.name) || "Erro: não encontrado";
}
function removerId(id) {
    lista_1.lista.filter(pessoa => pessoa.id !== id);
}
function alterar(id, newName, newBio) {
    lista_1.lista.map(pessoa => {
        if (pessoa.id === id) {
            return Object.assign(Object.assign({}, pessoa), { name: newName || pessoa.name, bio: newBio || pessoa.bio });
        }
        return pessoa;
    });
}
function contandoVogais(palavra) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
    for (let letra of palavra) {
        if (vogais.includes(letra)) {
            contador++;
        }
    }
    return contador;
}
