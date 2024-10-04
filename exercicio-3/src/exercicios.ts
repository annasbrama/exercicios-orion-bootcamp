import { lista, Pessoa } from "./lista.js"

/** buscarPorId
 * 
* Função para encontrar a bio de um cientista da lista com o requisito do seu id.
*  
* Se não for encontrado, mensagem de erro para o usuário será mostrado.
* 
* @param id - id a ser buscado.
* 
* @returns A bio do cientista requisitado ou mensagem de erro
 */
export function buscaPorId(id: number): Pessoa | undefined {
    return lista.find((pessoa) => pessoa.id === id)
}

/**procurarNome
 * 
 * Função para encontrar o nome de um cientista da lista com o requisito do seu id.
*  
* Se não for encontrado, mensagem de erro para o usuário será mostrado.
* 
* @param id - id a ser buscado.
* 
* @returns a const pessoa com seu valor com a função buscaPorId irá a procura do nome. Se a bio do cientista requisitado não for achado, cria-se a mensagem de erro
 */
export function procurarNome(id: number): string {
    const pessoa = buscaPorId(id)
    return pessoa ? pessoa.name && pessoa.bio : "Erro: Nome não encontrado"
}

/**excluirId
 * 
 * Função para remover um cientista da lista.
 * 
 * Na remoção, o resultado deverá retornar na atualização da lista sem o objeto excluído.
 * 
 * @param id: id a ser buscado.
 * @param lista: lista de cientistas.
 */
export function excluirId(id: number, lista: Array<Pessoa>) {
    const index = lista.findIndex(pessoa => pessoa.id === id)
    lista.splice(index, 1)
}

/**alterar
 * 
 * Função para alterar um objeto da lista.
 * 
 * Na alteração, o resultado do deverá retornar o conteúdo na lista original.
 * 
 * @param id - id a ser buscado.
 * @param newName - novo Nome a ser inserido.
 * @param newBio - nova Bio a ser inserida.
 */

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

/** contandoVogais
 * 
 * Função que conta as vogais inseridas em um input.
 * 
 * @param palavra: a string da mensagem que será contada.
 * @returns o número de vogais da mensagem inserida.
 */
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