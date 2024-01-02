function contador() {

var ini = document.getElementById('txti')
var fi = document.getElementById('txtf')
var pas = document.getElementById('txtp')
var resultado = document.getElementById('res')

if (ini.value.length == 0 || fi.value.length == 0 || pas.value.length == 0) {
    window.alert('Falha nos dados, tente novamente...')
    resultado.innerHTML = `Impossível contar`    
} else {
    var i = Number(ini.value)
    var f = Number(fi.value)
    var p = Number(pas.value)
    resultado.innerHTML = `Contando: </br>`
if (p == 0) {
    alert('Número inválido! considerando passo 1...')
    p = 1
    pas.value = 1
}    

if (i < f) {
    for (var c = i; c <= f; c = c + p) {
        resultado.innerHTML += `${c}👉`
    }
} else {
    for (var c = i; c >= f; c = c - p) {
        resultado.innerHTML += `${c}👉`
    }
}  resultado.innerHTML += `🏁`  
}
}