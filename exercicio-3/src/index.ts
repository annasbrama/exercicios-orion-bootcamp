import { alterar, buscaPorId, excluirId, procurarNome } from "./exercicios.js"
import { lista, Pessoa } from "./lista.js"

//CRIANDO A ESTRUTURA HTML COM OS CIENTISTAS
let cientistas = document.querySelector(".cientistas")

function criandoCientistas() {
    lista.forEach(cientista => {
        let section = document.createElement("section")
        cientistas?.appendChild(section)
        section.innerHTML = ` 
        <h2>${cientista.name}</h2>
        <p>${cientista.bio} </p> <button class="btn-excluir"">Excluir</button>`
    })

    let btnExcluir = document.querySelector(".btn-excluir")
    btnExcluir?.addEventListener('click', () => {
        let id = cientistas?.id
     
    })

}
criandoCientistas()

//IMPLEMENTAÇÕES COM REQUISIÇÕES DO USUÁRIO
const btnNew = document.querySelector(".btn-new")
const result = document.querySelector(".result") 