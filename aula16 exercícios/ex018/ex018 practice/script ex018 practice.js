let num = document.querySelector('input#numero')
let list = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let array = []

function isnumero(n) {
    if(Number(n) >= 1 && Number(n) <=1000){
        return true
    } else {
        return false
    }  
}

function inlist(n , l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function Adicionar() {
    if (isnumero(num.value) && !inlist(num.value , array)) {
          array.push(Number(num.value))
          let item = document.createElement('option')
          item.text = `O valor ${num.value} foi adicionado.`
          list.appendChild(item)
          res.innerHTML = ``
    } else {
          alert('O número já foi encontrado na lista.')
    }
    num.value = ``
    num.focus()

}

function Finalizar() {
    if(array.length == 0) {
        alert('Por favor, insira um número antes de finalizar!!')
    } else {
        let tot = array.length
        let maior = array[0]
        let menor = array[0]
        let soma = 0
        let media = 0
        
        for(let inicio in array) { 
            soma += array[inicio]
            if(array[inicio] > maior) 
            maior = array[inicio] 
            if(array[inicio] < menor) 
            menor = array[inicio]   
        }
          
        media = soma/tot
        res.innerHTML = ``
        res.innerHTML += `<p>Foram cadastrados ${tot} números!</p>`
        res.innerHTML += `<p>O ${maior} foi o maior número cadastrado!</p>`
        res.innerHTML += `<p>O ${menor} foi o menor número cadastrado!</p>`
        res.innerHTML += `<p>A soma dos números na lista é igual a ${soma}</p>`
        res.innerHTML += `<p> A média dos números selecionados é igual a ${media}</p>`
    }
}
