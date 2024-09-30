"use strict";
// criar uma função que retorne a quantidade de vogais da palavra passada
//b) Dar um exemplo de uso com uma palavra recebida via input no formulário.
let form = document.querySelector(".form-item");
function contandoVogais(palavra) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
    for (let letra of palavra) {
        if (vogais.includes(letra)) {
            contador++;
        }
    }
    return contador;
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector(".input");
    const palavra = input.value;
    const vogais = contandoVogais(palavra);
    const result = document.querySelector(".result");
    if (result) {
        result.innerHTML = `A mensagem "${palavra}" tem <strong>${vogais}</strong> vogais!`;
    }
});
