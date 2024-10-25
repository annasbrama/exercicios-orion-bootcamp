import { buscaPorId, alterar, contandoVogais } from "./exercicios.js"
import { listaCientistas, novoCientista } from "./index.js"
import { lista } from "./lista.js"

//EDITANDO CIENTISTA
/**
 * modalEditarCientista
 * 
 * Função para criar o modal de gerenciamento de um cientista existente.
 * 
 * As seguintes operações são:
 *  - Busca o cientista através do Id fornecido.
 *  - Cria um elemento modal no DOM com input e textarea para editar nome e biografia do item a ser chamado.
 *  - Preenchimento dos campos com as informações a serem editadas.
 *  - Configura os event listeners de cada botão gerado.
 * 
 * @param: {number} id do cientista a ser editado.
 */
export function modalEditarCientista(id: number) {
    const cientista = buscaPorId(id)
    if (!cientista) return

    const modal = document.createElement('div')
    modal.className = 'modal'
    modal.style.display = 'block'
    modal.innerHTML = `
        <div id="modal" class="modal">
            <div class="modal-content">
                <h2>Editando Cientista</h2>
        <input type="text" class="nome" placeholder="Digite o nome" value="${cientista.name}">
        <textarea class="bio" placeholder="Digite a biografia">${cientista.bio}</textarea>
                <div class="btns-modal">
        <button class="btn-add">Confirmar</button>
        <button class="btn-close">Fechar</button>
                </div>
            </div>
        </div>
    `
    document.body.appendChild(modal)

    //BOTÕES MODAL
    //BOTÃO PARA FECHAR MODAL
    const btnFechar = modal.querySelector(".btn-close") as HTMLButtonElement

    btnFechar.addEventListener("click", () => {
        modal.style.display = "none"
    })

    //BOTÃO PARA EDITAR NOVO CIENTISTA
    const btnAdd = modal.querySelector(".btn-add") as HTMLButtonElement
    const inputNome = modal.querySelector(".nome") as HTMLInputElement
    const textBio = modal.querySelector(".bio") as HTMLTextAreaElement

    btnAdd.addEventListener("click", () => {
        const novoNome = inputNome.value
        const novaBio = textBio.value

        if (novoNome && novaBio) {
            alterar(id, novoNome, novaBio)
            listaCientistas(lista)
            modal.remove()
        } else {
            alert("Insira todos os campos.")
        }
    })
}

//CRIANDO NOVO CIENTISTA 
/**
 * modalNovoCientista
 * 
 * Função para criar o modal para um novo cientista na lista.
 * 
 * As seguintes operações são:
 *  - Cria um elemento modal no DOM com input e textarea para as informaçõea a serem preenchidas do novo cientista.
 *  - Configura os event listeners de cada botão gerado.
 *   _ Botão Adicionar gerencia a validação e adição do cientista inserido.
 * 
 */
export function modalNovoCientista() {

    //CRIAÇÃO DA ESTRUTURA DO MODAL PARA ADICIONAR NOVO CIENTISTA
    const modal = document.createElement('div')
    modal.style.display = 'none'

    modal.className = 'modal'
    modal.innerHTML = `
        <div id="modal" class="modal">
            <div class="modal-content">
                <h2>Novo Cientista</h2>
        <input type="text" class="nome" placeholder="Digite o nome">
        <textarea class="bio" placeholder="Digite a biografia"></textarea>
                <div class="btns-modal">
        <button class="btn-add">Adicionar</button>
        <button class="btn-close">Fechar</button>
                </div>
            </div>
        </div>
    `
    document.body.appendChild(modal)

    //BOTÕES DO MODAL
    //BOTÃO PARA FECHAR MODAL
    const btnFechar = modal.querySelector(".btn-close") as HTMLButtonElement

    btnFechar.addEventListener("click", () => {
        modal.style.display = "none"
    })

    //BOTÃO PARA ADICIONAR NOVO CIENTISTA
    const btnAdd = modal.querySelector(".btn-add") as HTMLButtonElement
    const inputNome = modal.querySelector(".nome") as HTMLInputElement
    const textBio = modal.querySelector(".bio") as HTMLTextAreaElement

    btnAdd.addEventListener("click", () => {
        const nome = inputNome.value
        const bio = textBio.value

        if (nome && bio) {
            novoCientista(nome, bio)
            inputNome.value = ""
            textBio.value = ""
        } else {
            alert("Insira todos os campos.")
        }
    })

    return modal
}

//CONTANDO VOGAIS
/**modalVogais
 * 
 * Função para contagem de quantas vogais a mensagem inserida contém.
 * 
 * As seguintes operações são:
 *  - Cria um elemento modal no DOM com input para a mensagem ser enviada.
 *  - Configura os event listeners de cada botão gerado.
 *   _ Com a mensagem submetida, a validação da mensagem e a contagem das vogais ocorre com a mensagem em tela de seu total.
 */
export function modalVogais() {
    //CRIAÇÃO DA ESTRUTURA DO MODAL PARA ADICIONAR NOVO CIENTISTA
    const modal = document.createElement('div')
    modal.style.display = 'none'

    modal.className = 'modal'
    modal.innerHTML = `
    <div id="modal" class="modal">
        <div class="modal-content">
            <form class="form-item">
                <input type="text" class="input-modal" class="input" placeholder="Digite aqui..." required>
                <button class="btn-search" type="submit">Enviar</button>
            </form>
            <div class="vogais-msg"></div> 
            <div class="btns-modal">
                <button class="btn-close">Fechar</button>
            </div>
        </div>
    </div>
   `
    document.body.appendChild(modal)

    //BOTÕES DO MODAL
    //BOTÃO PARA FECHAR MODAL
    const btnFechar = modal.querySelector(".btn-close") as HTMLButtonElement

    btnFechar.addEventListener("click", () => {
        modal.style.display = "none"
    })

    //BOTÃO PARA ENVIAR MENSAGEM
    let form = modal.querySelector(".form-item")

    form?.addEventListener("submit", (event: Event) => {
        event.preventDefault()

        const input = modal.querySelector(".input-modal") as HTMLInputElement
        const palavra = input.value
        const vogais = contandoVogais(palavra)

        const vogaisMsg = modal.querySelector(".vogais-msg")

        if (vogaisMsg) {
            vogaisMsg.innerHTML = `A mensagem "${palavra}" tem <strong>${vogais}</strong> vogais!`
        }
    })

    return modal
}

