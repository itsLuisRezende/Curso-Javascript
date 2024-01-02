function contador() {
    var numberchoice = window.document.getElementById('variavel')
    var numberrepeat = window.document.getElementById('repeat')
    var numberincr = window.document.getElementById('incr')
    var resultado = window.document.getElementById('res')

    if (numberchoice.value == 0 ) {
        alert('[ERRO]Não é possível repetir número desejado.')
        alert('Alterando dados para o número 1...')    
        for (numberchoice.value = 1;numberchoice.value < 2;numberchoice++) {
        numberchoice.value = `${1}`
        
        } alert('Alteração concluída')
    } 
    else if (numberrepeat.value == 0 ) {
        alert('[ERRO]Não é possível repetir número desejado.')
        alert('Alterando dados para o número 1...')
        for (numberrepeat.value = 1;numberrepeat.value < 2;numberrepeat++) {
        numberrepeat.value = `${1}`
        
        } alert('Alteração concluída')
    } 
    else if (numberincr.value == 0 ) {
        alert('[ERRO]Não é possível repetir número desejado.')
        alert('Alterando dados para o número 1...')
        for (numberincr.value = 1;numberincr.value < 2;numberincr++) {
        numberincr.value = `${1}`
        
        } alert('Alteração concluída')
    } 
    else {
        resultado.innerHTML = `<p><strong>Contador:</strong></p>`
        for (var cn = numberchoice.value;cn < numberrepeat.value;cn = Number(cn) + Number(numberincr.value)) {
            resultado.innerHTML += `${cn}👉 `
        } resultado.innerHTML += `${cn}🏁`
    }    
    

    
}   