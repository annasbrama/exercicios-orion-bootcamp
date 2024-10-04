import { lista, Pessoa } from "./lista.js"

export function buscaPorId(id: number): Pessoa | undefined {
    return lista.find((pessoa) => pessoa.id === id)
}

export function procurarNome(id: number): string {
    const pessoa = buscaPorId(id)
    return pessoa ? pessoa.name && pessoa.bio : "Erro: Nome não encontrado"
}

export function excluirId(id: number, lista: Array<Pessoa>) {
    const index = lista.findIndex(pessoa => pessoa.id === id)
    lista.splice(index, 1)
}

export function alterar(id: number, newName?: string, newBio?: string): void {
    const index = lista.findIndex(pessoa => pessoa.id === id);
    if (index !== -1) {
        lista[index] = {
            ...lista[index],
            name: newName || lista[index].name,
            bio: newBio || lista[index].bio
        }
    }
}

export function contandoVogais(palavra: string): number {
    const contagemVogais = ['a', 'e', 'i', 'o', 'u']
    let contador = 0

    for (let letra of palavra) {
        if (contagemVogais.includes(letra)) {
            contador++
        }
    }
    return contador
}