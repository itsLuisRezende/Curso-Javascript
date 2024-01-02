var n = [3,4,7,1,2,8,9,5]
n.sort()
console.log(n)

/*for (var pos = 0; pos < n.length; pos++) {
    console.log(`A posição ${pos} é o número ${n[pos]}`)
}*/

for (var pos in n) {
    console.log(`A posição ${pos} é o número ${n[pos]}`)
}