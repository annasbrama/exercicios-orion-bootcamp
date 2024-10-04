import { lista } from "./lista.js";
export function buscaPorId(id) {
    return lista.find((pessoa) => pessoa.id === id);
}
export function procurarNome(id) {
    const pessoa = buscaPorId(id);
    return pessoa ? pessoa.name && pessoa.bio : "Erro: Nome não encontrado";
}
export function excluirId(id, lista) {
    const index = lista.findIndex(pessoa => pessoa.id === id);
    lista.splice(index, 1);
}
export function alterar(id, newName, newBio) {
    const index = lista.findIndex(pessoa => pessoa.id === id);
    if (index !== -1) {
        lista[index] = Object.assign(Object.assign({}, lista[index]), { name: newName || lista[index].name, bio: newBio || lista[index].bio });
    }
}
export function contandoVogais(palavra) {
    const contagemVogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
    for (let letra of palavra) {
        if (contagemVogais.includes(letra)) {
            contador++;
        }
    }
    return contador;
}
