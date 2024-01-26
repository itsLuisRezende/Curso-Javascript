var idade = 22
console.log (`Eu tenho ${idade}.`)
if (idade >= 18) {
    console.log ('voto obrigatório')
} else if (idade < 18 && idade > 16) {
    console.log('voto opcional')
} else {
    console.log('incapaz de votar')
}