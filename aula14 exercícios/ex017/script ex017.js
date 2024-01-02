function conferindo() {
    var nu = document.getElementById('number')
    var resultado = document.getElementById('res')
    var opt = document.getElementById('tab')
    var button = document.getElementById('but')

    if( nu.value.length == ` `) {
       alert('{ERRO] Dados incompletos, insira um número...')
       resultado.innerHTML = `<strong>insira um número acima na caixinha "número"!!</strong>☝`
       opt.innerHTML = ``
       opt.innerHTML = `<option>Digite um número</option>`
    } else  {
        var n = Number(nu.value)
        opt.innerHTML = ``
        resultado.innerHTML = `<p>Aqui está sua tabuada selecionada!!</p>`
    
        for (var c = 1; c <= 10; c++) {
            opt.innerHTML += `<option>${n} x ${c} = ${n*c}</option>`
        } 
   
    }    
    
}