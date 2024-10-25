import { excluirId, procurarNome } from "./exercicios.js"
import { lista, Pessoa } from "./lista.js"
import { modalEditarCientista, modalNovoCientista, modalVogais } from "./modais.js"

//CRIANDO A ESTRUTURA HTML COM OS CIENTISTAS
/** listaCientistas
 * 
 * Esta função realiza as operações: 
 *  - Evita o comportamento padrão do evento, caso tenha;
 *  - Verifica se o elemento "cientistas" existe;
 *  - Limpa o atual estado do elemento "cientistas";
 *  - Para cada item existente na lista:
 *    _ Cria um section no DOM com as informações de cada item gerado.
 *    _ Adiciona os botões "Editar" e "Excluir" para cada item gerado.
 *    _ Configura os event listeners de cada botão gerado.
 * 
 * @param: {Array<Pessoa>} informações dos cientistas importado do lista.ts
 * 
 * @returns: {Array<Pessoa>} retorna a mesma lista do parâmetro.
 */

const cientistas = document.querySelector(".cientistas")

export function listaCientistas(lista: Array<Pessoa>): Array<Pessoa> {
    event?.preventDefault()
    if (!cientistas) return lista

    cientistas.innerHTML = ""

    lista.forEach(cientista => {
        let section = document.createElement("section")
        cientistas?.appendChild(section)
        section.innerHTML = ` 
        <h2> <span>${cientista.id}.</span> ${cientista.name}</h2>
        <p>${cientista.bio} </p> 
        <div class="btns-section"> <button class="btn-edit" data-id="${cientista.id}">Editar</button>
        <button class="btn-excluir" data-id="${cientista.id}">Excluir</button></div>
        `

        // BOTÃO EXCLUIR
        const btnExcluir = section.querySelector(".btn-excluir")
        btnExcluir?.addEventListener("click", () => {
            excluirId(cientista.id, lista)
            listaCientistas(lista)
        })

        //BOTÃO EDITAR
        const btnEdit = section.querySelector(".btn-edit")
        btnEdit?.addEventListener("click", () => {
            modalEditarCientista(cientista.id)
        })
    })
    return lista
}

/** buscandoCientista
 * 
 * Através do id passado no input da tela, a função importada procurarNome() opera em busca do id desejado. O resultado aparecerá a bio do cientista procurado. Caso id não exista, a mensagem de erro da função procurarNome será mostrado em tela.
 * 
 * @returns: {void}
*/
function buscandoCientista(): void {
    const form = document.querySelector(".form-item") as HTMLFormElement
    const input = document.querySelector(".input") as HTMLInputElement

    let result = document.createElement("div")
    result.classList.add("result")

    form?.addEventListener("submit", (event: Event) => {
        event?.preventDefault()
        let id = Number(input.value)

        if (cientistas) cientistas.prepend(result)
        result.innerHTML = procurarNome(id)
    });

    listaCientistas(lista)
}

//ADICIONANDO NOVO CIENTISTA
/** novoCientista
 * 
 * Adicionando novo item na lista.
 * 
 * Através dessa função, cria-se um novo objeto dentro da lista já usada na estrutura, criando também um id único ao novo item. Após a nova adição, a lista atualiza na tela.
 * 
 * @param: {nome: string}  o nome novo do objeto novo na lista.
 * @param: {bio: string}  a bio nova do objeto novo na lista.
 * 
 * @returns: {void}
 */
export function novoCientista(nome: string, bio: string): void {
    let proximoId = Math.max(...lista.map(pessoa => pessoa.id)) + 1;

    const novo: Pessoa = {
        id: proximoId++,
        name: nome,
        bio: bio
    }
    lista.push(novo)
    listaCientistas(lista)
}

/** abrirModalNovoCientista
 * 
 * Função para que o modal advindo do botão "+ Novo Cientista" seja aberto com suas funcionalidades.  
 */
function abrirModalNovoCientista() {

    listaCientistas(lista)
    const modal = modalNovoCientista()
    const btnNew = document.querySelector(".btn-new") as HTMLButtonElement

    btnNew.addEventListener("click", () => {
        modal.style.display = "block"
    })
}

/** abrirModalVogais
 * 
 * Função para que o modal advindo do botão "Extra + Vogais" seja aberto com suas funcionalidades.  
 */
//VOGAIS 
function abrirModalVogais() {
    const modal = modalVogais()
    const btnVogais = document.querySelector(".btn-vogais") as HTMLButtonElement

    btnVogais.addEventListener("click", () => {
        modal.style.display = "block"
    })
}

//ATIVANDO AS FUNÇÕES PARA O FUNCIONAMENTO DA PÁGINA 
listaCientistas(lista)
buscandoCientista()
abrirModalNovoCientista()
abrirModalVogais()