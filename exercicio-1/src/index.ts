// 1 - Criar uma função que retorne a quantidade de vogais da palavra passada.
// a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.

// function vogais(): void {
//     let palavra: string = prompt("Digite uma palavra para contar seus vogais")
//     const vogais = ['a', 'e', 'i', 'o', 'u']
//     let contador = 0

//     for (let letra of palavra) {
//         if (vogais.includes(letra)) {
//             contador++
//         }
//     }

//     if (contador > 0) {
//         alert(`A palavra "${palavra}" tem ${contador}" vogais!`)
//     } else {
//         alert(`A palavra"${palavra}" não tem vogais.`)
//     }
// }


// b) Dar um exemplo de uso com uma palavra recebida via input no formulário.
// ------ separando para usar do input no html --------


let form = document.querySelector(".form-item")

function contandoVogais(palavra: string): number {
    const vogais = ['a', 'e', 'i', 'o', 'u']
    let contador = 0

    for (let letra of palavra) {
        if (vogais.includes(letra)) {
            contador++
        }
    }
    return contador
}

// Este código realiza as seguintes operações:
//  * 1. Seleciona o formulário e adiciona um event listener para o evento de submissão.
//  * 2. Previne o comportamento padrão de submissão do formulário.
//  * 3. Obtém o valor do input do usuário.
//  * 4. Conta as vogais na palavra inserida usando a função contandoVogais.
//  * 5. Exibe o resultado na página.

form?.addEventListener("submit", (event: Event) => {
    event.preventDefault()

    const input = document.querySelector(".input") as HTMLInputElement
    const palavra = input.value
    const vogais = contandoVogais(palavra)

    const result = document.querySelector(".result")
    if (result) {
        result.innerHTML = `A mensagem "${palavra}" tem <strong>${vogais}</strong> vogais!`
    }
})