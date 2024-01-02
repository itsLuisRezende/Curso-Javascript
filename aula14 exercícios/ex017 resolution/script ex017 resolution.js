function Gerar() {
    var num = document.getElementById('numero')
    var tabuada = document.getElementById('tab')
    var resultado = document.getElementById('res')

    if (num.value.length == ` `) {
        alert('Por favor, insira um número!...')
        resultado.innerHTML = `Insira um número na caixinha "número" acima!☝`
        tabuada.innerHTML = ` `
    }
    else {
        var n = Number(num.value)
        tabuada.innerHTML = ` `
        var c = 1
        while (c <= 10) {
            var item = document.createElement(`option`)
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}