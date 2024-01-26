function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'fotomenino.jpg')
            } else if (idade < 21) {
                //Adolescente
                img.setAttribute('src', 'fotogaroto.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotohomem.jpg')
            } else {
                //idoso(a)
                img.setAttribute('src', 'fotoidoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade <= 10) {
            //Criança
            img.setAttribute('src', 'fotomenina.jpg')
            } else if (idade < 21) {
                //Adolescente
                img.setAttribute('src', 'fotogarota.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotomulher.jpg')
            } else {
                //idoso(a)
                img.setAttribute('src', 'fotoidosa.jpg')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
    