// 2 - Dado o array:
interface Pessoa {
    id: number;
    name: string;
    bio: string;
}

let lista: Array<Pessoa> = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }];

/* Criando uma Bio Funcional
*
* Função para encontrar a bio de uma pessoa da lista de dados com o requisito do seu id de forma funcional.
*  
* Se não for encontrado, mensagem de erro para o usuário será mostrado.
* 
* @param id - id a ser buscado.
* 
* @returns A bio da pessoa requisitada ou mensagem de erro  */
function buscaPorId(id: number): Pessoa | undefined {
    return lista.find((pessoa) => pessoa.id === id)
}

/* Criando uma função Imperativa para requisição da Bio de uma pessoa.
*
* Função para encontrar a bio de uma pessoa da lista de dados com o requisito do seu id de forma imperativa.
*  
* Se não for encontrado, mensagem de erro para o usuário será mostrado.
* 
* @param id - id a ser buscado.
* 
* @returns A bio da pessoa requisitada ou mensagem de erro  */
function bioImperativo(id: number): string {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            return lista[i].bio
        }
    }
    return "Erro: não encontrado"
}

/* Criando uma função Funcional para requisição do nome de uma pessoa.
*
* Função para encontrar o nome de uma pessoa da lista de dados com o requisito do seu id.
*  
* Se não for encontrado, mensagem de erro para o usuário será mostrado.
* 
* @param id - id a ser buscado.
* 
* @returns a const pessoa com seu valor com a função buscaPorId irá a procura do nome. Se a bio da pessoa requisitada não for achada cria-se a mensagem de erro  */
function nameFuncional(id: number): string {
    const pessoa = buscaPorId(id)
    return pessoa ? pessoa.name : "Erro: Nome não encontrado"
}

//imperativo
function nameImperativo(id: number): string {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            return lista[i].name
        }
    }
    return "Erro: não encontrado"
}

/* Criando uma função Funcional para apagar um item da lista conforme id passado.
*
* Função para remover item da lista.
*  
* Na remoção, o resultado do filter deverá retornar uma nova lista sem prejudicar a original.
* 
* @param id - id a ser buscado.
* 
* @returns se a const removerId com a execução da função buscaPorId sendo seu valor não for retornada, a lista não é modificada. Ao escolher o item a ser excluído e executado no sistema, cria-se uma nova constante com nome novaLista (ou o que preferir) e seu valor é a execução da função. Exemplo: const novaLista = removeFuncional(1) //(1 = o id: 1, no caso da nossa lista é a Ada Lovelace, que seria o item a ser removido)  */
function removeFuncional(id: number): Array<Pessoa> {
    const removerId = buscaPorId(id)
    if (!removerId) {
        return lista
    }
    return lista.filter(pessoa => pessoa.id !== id)
}

//imperativo
function removeImperativo(id: number): void {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            lista.splice(i, 1)
            break;
        }
    }
}

/* Criando uma função Funcional para alterar um item da lista conforme id passado.
*
* Função para alterar item da lista.
*  
* Na alteração, o resultado do map deverá retornar no conteúdo da lista original.
* 
* @param id - id a ser buscado, com novo Nome e nova Bio como strings.
* 
* @returns se a const encontrarId com a execução da função buscaPorId sendo seu valor não for retornada, a lista não é modificada. Se a busca for válida, ao escolher o item a ser alterado, os dados da lista serão atualizados. Exemplo: console.log(alterFuncional(1, "Anna", "Estudante de front-end"))*/
function alterFuncional(id: number, newName?: string, newBio?: string): Array<Pessoa> {
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

//imperativo
function alterImperativo(id: number, newName?: string, newBio?: string): void {
    for (let pessoa of lista) {
        if (pessoa.id === id) {
            if (newName) {
                pessoa.name = newName
            }
            if (newBio) {
                pessoa.bio = newBio
            }
            break
        }
    }
}