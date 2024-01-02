var numeração = [1, 3, 5, 2, 4, 8, 6]
numeração.push(9)
numeração.sort()
numeração[6] = (7)
numeração[7] = (8)

console.log(numeração)
console.log(`Aqui tem ${numeração.length} números.`)
console.log(`Este número esta na posição ${numeração[2]}`)

var pos = numeração.indexOf(4)
if (pos == -1) {
    console.log(`${pos}....esta posição não existe.`)
} 
else {
    console.log(`Esta posição é ${pos}`)
}