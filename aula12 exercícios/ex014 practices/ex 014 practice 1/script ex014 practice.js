var dia = new Date()
var d = dia.getDay()
var di = document.getElementById('diasem')
switch(d) {
    case 0:
        di.innerHTML += `<p>Domingo</p>`
        break
    case 1:
        di.innerHTML += `<p>Segunda-feira</p>`
        break
    case 2:
        di.innerHTML += `<p/>Terça-feira</p>`
        break
    case 3:
        di.innerHTML += `<p>Quarta-feira</p>`
        break
    case 4:
        di.innerHTML += `<p>Quinta-feira</p>`
        break
    case 5:
        di.innerHTML += `<p>Sexta-feira</p>`
        break
    case 6:
        di.innerHTML += `<p>Sabado</p>`
            break
    default: di.innerHTML += `<p>[ERRO] dia inválido</p>`     
}
alert('Olá! Seja bem-vindo as praticas com javascript!!')
confirm('Vamos testar seu conhecimento antes com a divisao ok!?...')
var n1 = Number(prompt('Digite um número...'))
var n2 = Number(prompt('Digite outro número...'))
var d = n1 / n2
d = window.Number(alert(`A divisão entre ${n1} e ${n2} é igual a ${d}, se você respondeu esse número antes de chegar aqui, PARABÉNS! Você é demais!!`))

var evento = window.document.getElementById('eventos')
evento.addEventListener('mouseenter', entrar)
evento.addEventListener('click', clicar)
evento.addEventListener('mouseout', sair)

function entrar() {
evento.innerHTML = `Olá aluno!`
evento.style.background = 'blue'
evento.style.color = 'yellow'
}
function clicar() {
evento.innerHTML = `Seja Bem vindo!!`
evento.style.background = 'purple'
evento.style.color = 'white'

}
function sair() {
evento.innerHTML = `Muito prazer em conhece-lo(a)`
evento.style.background = 'lightblue'
evento.style.color = 'black'
}

