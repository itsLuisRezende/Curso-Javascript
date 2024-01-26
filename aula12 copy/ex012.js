var temporeal = new Date()
var horas = temporeal.getHours()
console.log(`Agora são ${horas} horas !!`)
if (horas >= 6 && horas <= 12) {
    console.log(`Bom dia`)
} else if ( horas > 12 && horas <= 18) {
    console.log(`Boa tarde`)
} else if ( horas >= 18) {
    console.log (`Boa noite`)
} else if (horas >= 0 && horas < 6) {
    console.log(`Boa madrugada`)
}
