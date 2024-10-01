import { lista } from "./lista.ts"

export function procurarBio(id: number): string {
    return lista.find(pessoa => pessoa.id === id)?.bio || "Erro: não encontrado"
}

export function procurarNome(id: number): string {
    return lista.find(pessoa => pessoa.id === id)?.name || "Erro: não encontrado"
}

export function removerId(id: number): void {
    lista.filter(pessoa => pessoa.id !== id)  
}

export function alterar(id: number, newName?: string, newBio?: string): void {
    lista.map(pessoa => {
        if (pessoa.id === id) {
            return { ...pessoa, name: newName || pessoa.name, bio: newBio || pessoa.bio }
        }
        return pessoa
    })
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