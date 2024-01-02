let num = document.querySelector('input#numero')
let list = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let vetores = []

function isNumber(n) {
    if(Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inlista(n , l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function Adicionar() {
    if(isNumber(num.value) && !inlista(num.value , vetores)) {
        vetores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        list.appendChild(item)
        res.innerHTML = ``
    } else {
        alert('[ERRO] Número invalido ou já adicionado na lista.')
    }
    num.value = ``
    num.focus()
}
function Finalizar() {
    if(vetores.length == 0) {
        alert('Digite um número antes de finalizar!')
    } else {
        let total = vetores.length
        let maior = vetores[0]
        let menor = vetores[0]
        let soma = 0
        let media = 0
        

        for(let begin in vetores) {
            soma += vetores[begin]
            if(vetores[begin] > maior)
            maior = vetores[begin]
            if(vetores[begin] < menor)
            menor = vetores[begin]
        }
        media = soma/total
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados!</p>`
        res.innerHTML += `<p>O maior número registrado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número registrado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os números é igual a ${soma}.</p>`
        res.innerHTML += `<p>A média de todos os números selecionados é igual a ${media}</p>`    
    }
}