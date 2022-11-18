//1
const mais = function (x, y){return x + y;
}
console.log(mais(5,5));
function mais1(x, y){
    return x + y;
}
console.log(mais1(10,5));


//2
const menos = function(x, y=(x*2)){return x-y;
}
console.log(menos(5,4));
console.log(menos(5));
function menos1 (a,b){
    if (b === undefined){return -a;
}
    return a - b;
  };
console.log(menos1(15,8));
console.log(menos1(8));


//3
function eCrescente(lista) {
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < lista[i-1]){
            return console.log("Não é crescente")
        }

    }
    return console.log("É crescente")
}

let array = [1,2,3,4]
let array2 =[1,2,3,1,5]
let array3 = [-5,-3,1,2,3,4]
let array4 = [10,9,8]
eCrescente(array)
eCrescente(array2)
eCrescente(array3)
eCrescente(array4)





//4
function maior(...valores) {
    if (valores.length === 0) return null;
    let maior= valores[0];
    for (const valor of valores) {
       if (valor > maior) {
          maior = valor;
       }
    }
    return maior;
 }
 console.log(maior(1,7,3));


//5
function join(valores, separador = ",") {
    if (valores.length === 0) return "";
    let saida = `${valores[0]}`;
    for (let i = 1; i < valores.length; i++) {
       saida += `${separador}${valores[i]}`
    }
    return saida;
 }


 //6
function unicos(valores, campo) {
    const resultados = {};
    for (const valor of valores) {
        resultados[valor[campo]] = true;
    }
    return Object.keys(resultados);
}

//7 
function fib1(n) {
    let n1 = 1;
    let n2 = 1;
    let result = n1;
    for (const i = 2; i <= n; i++) {
        result = n1 + n2;
        n1 = n2;
        n2 = result;
    }
    return result;
}
function fib2(n) {
    if (n <= 1) return 1;
    return fib2(n-1) + fib2(n-2);
}
const fib3 = n => n <= 1 ? 1 : fib3(n-1) + fib3(n-2);
 

//8
const dobro = mapear([1,2,3,4], x => x * 2);
console.log(dobro);
function mapear(array, fn) {
    const out = [];
    for (const valor of array) {
        out.push(fn(valor));
    }
    return out;
}

//9
const seq = collatz(5);
console.log(seq()); 
console.log(seq()); 
console.log(seq()); 
console.log(seq()); 
console.log(seq()); 
function collatz(num) {
    let inicio = num;
    return function() {
        if (num % 2 == 0) {
            num /= 2;
        } else {
            num = 3 * inicio + 1;
        }
        return num;
    }
}


//10
const plus = (a, b) => a + b;
const sum = verbose(plus);
sum(5,2); 
function verbose(fn) {
    return function(...values) {
        const result = fn(...values);
        console.log(`${fn.name}(${values.join(",")}) = ${result}`);
        return result;
    }
}
