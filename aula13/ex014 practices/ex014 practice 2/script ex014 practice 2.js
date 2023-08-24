function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var diasem = data.getDate()
    var mes = data.getMonth()
    var ano = data.getFullYear()
    msg.innerHTML = `Agora são <strong>${hora}:${min} (${diasem}/${mes}/${ano})</strong>.`

    if (hora >= 0 && hora <= 6){
    msg.innerHTML += `<p>Boa Madrugada !!</p>`
    img.src = `fdamadrugada.jpg`
    document.body.style.background = `#1C1C1C`
    }
    else if (hora > 6 && hora <=12){
    msg.innerHTML += `<p>Bom Dia !!</p>`
    img.src = `fdodia.jpg`   
    document.body.style.background = `#98fb98` 
    }
    else if (hora > 12 && hora < 18) {
    msg.innerHTML += `<p>Boa Tarde !!</p>`
    img.src = `fdatarde.jpg`
    document.body.style.background = `#FFDEAD`
    } 
    else if (hora >= 18 && hora <= 24){
    msg.innerHTML += `<p>Boa Noite !!</p>`
    img.src = `fdanoite.jpg`
    document.body.style.background = `#1C1C1C`
    }
    }