function contar() {
    var ini = document.getElementById('txti')
    var fi = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var resultado = document.getElementById('res')

    if (ini.value.length == 0 || fi.value.length == 0 || pas.value.length == 0) {
        alert('{ERRO] falha nos dados, tente novamente...')
        resultado.innerHTML = `impossível contar`
    } else {
        resultado.innerHTML = `Contando: </br>`
        var i = Number(ini.value)
        var f = Number(fi.value)
        var p = Number(pas.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1...')
            p = 1
            pas.value = p
    }       
    if (i <= f) { //contagem crescente
        for (var c = i;c <= f; c += p) {
            resultado.innerHTML += `${c}👉`
        } 
    } 
    else  {     //contagem regressiva
        for (var c = i;c >= f; c -= p) {
            resultado.innerHTML += `${c}👉`
        }
    }
    resultado.innerHTML += `🏁`    
    }
}
