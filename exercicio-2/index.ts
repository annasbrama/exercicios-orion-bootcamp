// 2 - Dado o array:

let lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }];

// a) Crie uma função que retorne a bio do id passado
//funcional
function bioFuncional(id: number): string {
    return lista.find(pessoa => pessoa.id === id)?.bio || "Erro: não encontrado"
}

//imperativo
function bioImperativo(id: number): string {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            return lista[i].bio
        }
    }
    return "Erro: não encontrado"
}

// b) Crie uma função que retorne o name do id passado
//funcional
function nameFuncional(id: number): string {
    return lista.find(pessoa => pessoa.id === id)?.name || "Erro: não encontrado"
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

// c) Crie uma função que apague um item da lista a partir de um id passado
//funcional 
function removeFuncional(id: number): void {
    lista = lista.filter(pessoa => pessoa.id !== id)
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

// d) Crie uma função que altere a bio ou o name a partir de um id passado
//funcional
function alterFuncional(id: number, newName?: string, newBio?: string): void {
    lista = lista.map(pessoa => {
        if (pessoa.id === id) {
            return { ...pessoa, name: newName || pessoa.name, bio: newBio || pessoa.bio }
        }
        return pessoa
    })
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