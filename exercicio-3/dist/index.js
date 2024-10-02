import { removerId, procurarBio } from "./exercicios.js";
import { lista } from "./lista.js";
//CRIANDO A ESTRUTURA HTML COM OS CIENTISTAS
let cientistas = document.querySelector(".cientistas");
function criandoCientistas() {
    lista.forEach(cientista => {
        let section = document.createElement("section");
        cientistas === null || cientistas === void 0 ? void 0 : cientistas.appendChild(section);
        section.innerHTML = ` 
        <h2>${cientista.name}</h2>
        <p>${cientista.bio} </p> <button class="btn-excluir"">Excluir</button>`;
    });
    let btnExcluir = document.querySelector(".btn-excluir");
    btnExcluir === null || btnExcluir === void 0 ? void 0 : btnExcluir.addEventListener('click', () => {
        let id = cientistas === null || cientistas === void 0 ? void 0 : cientistas.id;
        removerId(id);
        criandoCientistas();
    });
}
criandoCientistas();
//IMPLEMENTAÇÕES COM REQUISIÇÕES DO USUÁRIO
const btnNew = document.querySelector(".btn-new");
const result = document.querySelector(".result");
//PROCURANDO POR NOME
const form = document.querySelector(".form-item");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", () => {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    let input = parseInt(document.getElementById("input").value, 15);
    const search = procurarBio(input);
    result.innerHTML = search;
});
const btnSearch = document.querySelector(".btn-search");
//EVENTOS PARA OS BOTÕES DE BUSCA E ADICIONAR NOVO CIENTISTA    
