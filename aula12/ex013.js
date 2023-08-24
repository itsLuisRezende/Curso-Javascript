var diareal = new Date()
var diasem = diareal.getDay()
//diasem = 7
/*
0- domnigo
1- segunda-feira
2- terça-feira
3- quarta-feira
4- quinta-feira
5- sexta-feira
6- sabado
*/

console.log(diasem)
switch(diasem) {
    case 0:
    console.log('domingo')
    break
    case 1:
    console.log('segunda-feira')
    break
    case 2:
    console.log('terça-feira')
    break
    case 3:
    console.log('quarta-feira')
    break
    case 4:
    console.log('quinta-feira')
    break
    case 5:
    console.log('sexta-feria')
    break
    case 6:
    console.log('sabado')
    break
    default:
        console.log('[ERRO] dia inválido')
    
}