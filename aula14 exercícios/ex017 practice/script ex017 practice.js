function verificando() {

    var numero = document.getElementById('numero')
    var tabuada = document.getElementById('tabuada')
    var resultado = document.getElementById('res')

    if (numero.value.length == ` `) {
    alert('Espaço não preenchido, por favor, insira um número!')
    resultado.innerHTML = `<strong>Insira um número no espaço acima!</strong> ☝`
    tabuada.innerHTML = ` `
    }

    else {
        var n = Number(numero.value)
        tabuada.innerHTML = ` `
        var c = 1
        while (c <= 10) {
        tabuada.innerHTML += `<option>${n} x ${c} = ${n*c}</option> `
        c++
        }
    }
}