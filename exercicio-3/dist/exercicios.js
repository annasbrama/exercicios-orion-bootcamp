import { lista } from "./lista.js";
export function procurarBio(id) {
    var _a;
    return ((_a = lista.find(pessoa => pessoa.id === id)) === null || _a === void 0 ? void 0 : _a.bio) || "Erro: não encontrado";
}
export function procurarNome(id) {
    var _a;
    return ((_a = lista.find(pessoa => pessoa.id === id)) === null || _a === void 0 ? void 0 : _a.name) || "Erro: não encontrado";
}
export function removerId(id) {
    lista.filter(pessoa => pessoa.id !== id);
}
export function alterar(id, newName, newBio) {
    lista.map(pessoa => {
        if (pessoa.id === id) {
            return Object.assign(Object.assign({}, pessoa), { name: newName || pessoa.name, bio: newBio || pessoa.bio });
        }
        return pessoa;
    });
}
export function contandoVogais(palavra) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
    for (let letra of palavra) {
        if (vogais.includes(letra)) {
            contador++;
        }
    }
    return contador;
}
