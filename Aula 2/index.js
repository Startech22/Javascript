// 1

const lista1 = [2, -8, 10, 22, 44, -10]

console.log(lista1);

for (const positivos of lista1){
    if (positivos > 0){
        console.log(positivos);
    }
}
console.log('O comprimento da lista = ' + lista1.length)
soma = 0

for (const somar of lista1){
    soma += somar;
}

const media = soma / lista1.length
console.log(`A média da lista é de ${media}`)

// 2
const list = [
    {nome: 'pessoa1', cor1:'pardo'},
    {nome: 'pessoa2', cor2:'branco'},
    {nome: 'pessoa3', cor3:'branco'},
    {nome: 'pessoa4', cor4:'preto'},
    {nome: 'pessoa5', cor5:'pardo'},
    {nome: 'pessoa6', cor6:'pardo'},
    {nome: 'pessoa7', cor7:'branco'},
    {nome: 'pessoa8', cor8:'preto'},
    {nome: 'pessoa9', cor9:'pardo'},
    {nome: 'pessoa10', cor10:'branco'},
    {nome: 'pessoa11', cor11:'preto'},
    {nome: 'pessoa12', cor12:'branco'},
    {nome: 'pessoa13', cor13:'pardo'},
    {nome: 'pessoa14', cor14:'branco'},
    {nome: 'pessoa15', cor15:'branco'}
];
console.log(list); 
const num = [];
for (let pessoa of list){
    if (!num[pessoa.cor]){
        num[pessoa.cor]=1;    } 
    else {
        num[pessoa.cor]++;
    }
}
console.log('Numero de pessoas de cada cor:')
console.log(num)


// 3
const y = Math.floor(Math.random() * 100 + 1);    
const x = prompt('Digite um numero:')
if (x == y){
        console.log(`Voce escolheu ${x} e saiu o numero ${y}, Parabéns voce venceu!`)
    } else if (x < 0 || x > 100){
        console.log('Desistiu?')
    } else if(x > y){    
        console.log(`Voce escolheu ${x} e saiu o numero ${y}, tente novamente. Digite um número menor:`);
    } else if (x < y){
        console.log(`Voce escolheu ${x} e saiu o numero ${y}, tente novamente. Digite um número maior:`)
    } 



