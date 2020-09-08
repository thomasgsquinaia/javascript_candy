/*
OBSERVAÇÃO: 

array é uma variavel que tem varios elementos 
e cada elemento  
é composto por seu valor  
e por uma chave de identificação 

*/

let num = [1,3,5,8,6,9]
/*num[5] = 10 coloca em determinada posição*/
/*num.push(11)  acrescenta o valor no final*/
/*num.length para saber a quantidade de elementos */
/*num.sort() coloca em ordem crescente*/

num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(2)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)

} else {
    console.log(`O valor 8 está na posição ${pos}`)
}