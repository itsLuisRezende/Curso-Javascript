var num = [2, 6, 4, 1, 9, 3]
num.push(7)
num.sort()
console.log(num)
console.log (`aqui tem ${num.length} posições`)
console.log(`esta posição é o número ${num[0]}`)
let pos = num.indexOf(7)
if (pos == -1) {
    console.log(`(${pos})O valor não foi encontrado! `)
} else {
    console.log(`O valor está na posição ${pos}`)
}