import { alterar, removerId, procurarBio, procurarNome } from "./exercicios.ts"
import { lista } from "./lista.ts"

//CRIANDO A ESTRUTURA HTML COM OS CIENTISTAS
let cientistas = document.querySelector(".cientistas")

function criandoCientistas() {
    lista.forEach(cientista => {
        let section = document.createElement("section")
        cientistas?.appendChild(section)  
        section.innerHTML = ` 
        <h2> <span> ${cientista.id}.</span> ${cientista.name}</h2>
        <p>${cientista.bio}</p>`
    })
}
criandoCientistas()

//IMPLEMENTAÇÕES COM REQUISIÇÕES DO USUÁRIO
const btnNew = document.querySelector(".btn-new") 
const result = document.querySelector(".result")

//PROCURANDO POR NOME
const form = document.querySelector(".form-item") as HTMLFormElement

form?.addEventListener("submit", () => {
    event?.preventDefault()

    let input = parseInt((document.getElementById("input") as HTMLInputElement).value, 15)
    

    const search = procurarBio(input)

    result!.innerHTML = search

})

const btnSearch = document.querySelector(".btn-search") as HTMLButtonElement


//EVENTOS PARA OS BOTÕES DE BUSCA E ADICIONAR NOVO CIENTISTA

