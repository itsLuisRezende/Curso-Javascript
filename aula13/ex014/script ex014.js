function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours() 
msg.innerHTML = ` Agora são <strong>${hora} horas.</strong>`
if (hora >= 6 && hora < 12) {
msg.innerHTML += `<p>Bom dia !!</p>`
img.src = 'fotododia.jpg'
document.body.style.background = '#98fb98'


}
else if (hora >= 12 && hora <= 18){
msg.innerHTML += `<p>Boa tarde !!</p>`
img.src = `fotodatarde.jpg`
document.body.style.background = `#FFDEAD`

}
else if (hora > 18 && hora <= 23){
msg.innerHTML += `<p>Boa noite !!</p>`
img.src = `fotodenoite.jpg`
document.body.style.background = `#1C1C1C`


}
else if (hora >= 0 && hora < 6){
msg.innerHTML += `<p>Boa madrugada !!</p>`
img.src = `fotodenoite.jpg`
document.body.style.background = `#1C1C1C`

}
}
