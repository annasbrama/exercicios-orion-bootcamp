import { lista, Pessoa } from "./lista.js"

export function buscaPorId(id: number): Pessoa | undefined {
    return lista.find((pessoa) => pessoa.id === id)
}

export function procurarNome(id: number): string {
    const pessoa = buscaPorId(id)
    return pessoa ? pessoa.name : "Erro: Nome não encontrado"
}

export function excluirId(id: number): Array<Pessoa> {
    const removerId = buscaPorId(id)
    if (!removerId) {
        return lista
    }
    return lista.filter(pessoa => pessoa.id !== id)
}

export function alterar(id: number, newName?: string, newBio?: string): Array<Pessoa> {
    const encontrarId = buscaPorId(id);

    if (!encontrarId) {
        return lista;
    }

    return lista.map(pessoa =>
        pessoa.id === id
            ? { ...pessoa, name: newName || pessoa.name, bio: newBio || pessoa.bio }
            : pessoa
    );
}

export function contandoVogais(palavra: string): number {
    const vogais = ['a', 'e', 'i', 'o', 'u']
    let contador = 0

    for (let letra of palavra) {
        if (vogais.includes(letra)) {
            contador++
        }
    }
    return contador
}